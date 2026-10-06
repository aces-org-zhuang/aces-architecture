#!/usr/bin/env node
/**
 * sync-projects.mjs — aggregate project-level design repos into this layer.
 *
 * Design rationale:
 * - This repo is the GLOBAL layer. It is NOT referenced by any project as a
 *   submodule; instead it pulls each project design repo in as a submodule.
 *   The dependency direction is the reverse of a normal project setup, so no
 *   circular dependency and no gitlink churn in project repos.
 * - Each project design repo gets its own submodule entry. A design change in
 *   one project updates only this repo's pointer, never a project repo.
 * - `--check` verifies the working tree matches projects.json without writing,
 *   for CI use.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REGISTRY = join(ROOT, 'projects.json');
const CHECK_ONLY = process.argv.includes('--check');
const INCLUDE_PLANNED = process.argv.includes('--include-planned');

/** Resolve the git executable. On Windows npm scripts may not inherit PATH. */
function gitBin() {
  if (process.env.GIT_BIN) return process.env.GIT_BIN;
  if (process.platform !== 'win32') return 'git';
  for (const c of ['git.exe', 'git']) {
    try {
      execFileSync(c, ['--version'], { stdio: 'ignore' });
      return c;
    } catch {
      /* try next */
    }
  }
  return 'git';
}

function git(args, cwd = ROOT) {
  return execFileSync(gitBin(), args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: process.platform === 'win32',
  }).trim();
}

/** A project design repo is present when its submodule directory is checked out. */
function isPresent(root, localPath) {
  const abs = join(root, localPath);
  if (!existsSync(abs)) return false;
  return existsSync(join(abs, '.git')) || existsSync(join(abs, '.gitmodules'));
}

function fail(msg) {
  console.error(`sync-projects: ${msg}`);
  process.exit(1);
}

let registry;
try {
  registry = JSON.parse(readFileSync(REGISTRY, 'utf8'));
} catch (e) {
  fail(`cannot read projects.json: ${e.message}`);
}

const projects = registry.projects ?? [];
if (!projects.length) {
  console.log('sync-projects: registry is empty, nothing to do');
  process.exit(0);
}

const results = [];
for (const p of projects) {
  const path = p.localPath;
  const url = p.designRepo;
  const present = isPresent(ROOT, path);

  if (CHECK_ONLY) {
    // Planned-but-absent is acceptable; a wired-up repo that vanished is not.
    if (!present && p.status === 'planned') {
      results.push({ id: p.id, ok: true, mode: 'planned-absent' });
    } else {
      results.push({ id: p.id, ok: present, mode: 'check' });
    }
    continue;
  }

  try {
    if (!present) {
      if (p.status === 'planned' && !INCLUDE_PLANNED) {
        results.push({ id: p.id, ok: true, mode: 'skipped-planned' });
        continue;
      }
      console.log(`+ add ${p.id} <- ${url}`);
      git(['submodule', 'add', url, path]);
      results.push({ id: p.id, ok: true, mode: 'added' });
    } else {
      console.log(`~ update ${p.id}`);
      git(['submodule', 'update', '--remote', '--init', path]);
      results.push({ id: p.id, ok: true, mode: 'updated' });
    }
  } catch (e) {
    results.push({
      id: p.id,
      ok: false,
      mode: 'error',
      error: (e.stderr || e.message || String(e)).toString().trim(),
    });
  }
}

if (CHECK_ONLY) {
  const missing = results.filter((r) => !r.ok);
  console.log(`sync-projects: ${results.length - missing.length}/${results.length} project design repos ok`);
  for (const r of results) {
    console.log(`  ${r.id}: ${r.mode}`);
  }
  if (missing.length) {
    for (const m of missing) console.error(`  missing: ${m.id}`);
    process.exit(1);
  }
} else {
  // Persist resolved commits so pointer drift shows up in the diff.
  const resolved = {};
  for (const p of projects) {
    if (!isPresent(ROOT, p.localPath)) {
      resolved[p.id] = null;
      continue;
    }
    try {
      resolved[p.id] = git(['rev-parse', 'HEAD'], join(ROOT, p.localPath));
    } catch {
      resolved[p.id] = null;
    }
  }
  registry.resolved = resolved;
  registry.updated = new Date().toISOString().slice(0, 10);
  writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n', 'utf8');

  const errs = results.filter((r) => !r.ok);
  for (const r of results) console.log(`  ${r.id}: ${r.mode}`);
  console.log(`sync-projects: ${results.length - errs.length}/${results.length} synced`);
  if (errs.length) {
    for (const e of errs) console.error(`  failed: ${e.id} — ${e.error}`);
    process.exit(1);
  }
}
