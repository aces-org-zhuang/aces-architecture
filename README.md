# aces-architecture

Global architecture aggregation layer for ACES. Owns **cross-project** views over project-level design repos.

This repo is **not** a normal project repo. It is the layer that answers questions no single project can:

- Which services depend on each other across projects?
- Where are the boundaries and shared infrastructure?
- Where is the dependency drift?

## Repository layering

ACES uses two design-repo layers. The distinction matters because it decides who references whom.

| Layer | Repo | Referenced by | Contents |
| --- | --- | --- | --- |
| Project | `design-<project>` (e.g. `design-beauty`) | Its own project repo, via `vendor/design/aces-design` | That project's model, views, sequence diagrams, deployment views, ADRs |
| Global | `aces-architecture` (this repo) | **Nobody.** It pulls project repos in instead | Cross-project landscape, service inventory, dependency matrix |

### Why this split

A Git submodule's gitlink records the sub-repo **HEAD commit**, not the portion you actually use. If several projects referenced one shared design repo, every design commit would force an unrelated PR in each of them. That is gitlink churn, and it does not get better with `sparse-checkout` — sparse-checkout changes the working tree, not the gitlink, and a partial checkout breaks LikeC4's cross-file `include` resolution.

So the dependency direction is inverted here:

```text
project repo  --submodule-->  design-<project>
aces-architecture  --submodule-->  design-<project>   (aggregator, not aggregated)
```

A design change in one project updates a pointer **only in this repo**. Project repos stay untouched.

## What belongs here, and what does not

| Content | Location |
| --- | --- |
| Cross-project service map and dependency matrix | **Here** |
| Deployment topology spanning multiple projects | **Here** |
| A single project's internal component design | Its own `design-<project>` |
| Anything that must land in the same PR as code | The project repo `docs/` |

Design that ships with a code PR belongs in the project repo. Pushing it here would let architecture lag behind code, which is exactly the rot this whole setup exists to prevent.

## Getting started

```bash
npm install
npm run dev            # likec4 serve — hot reload on http://localhost:5173
npm run validate       # likec4 validate
npm run build          # likec4 build -o ./dist
npm run sync           # pull registered project design repos
npm run sync:check     # verify all registered repos are present (CI)
```

Node must satisfy the pinned LikeC4 `engines` field (see `package.json`). LikeC4 is pinned to an exact version on purpose: its DSL behavior changes across releases, so a floating range would make CI non-reproducible.

## Registering a project

Add an entry to `projects.json`:

```json
{
  "id": "beauty",
  "name": "BeautyCustomerService",
  "designRepo": "https://github.com/aces-org-zhuang/design-beauty.git",
  "localPath": "projects/design-beauty",
  "status": "planned",
  "owner": "aces-org-zhuang"
}
```

Then wire it in:

```bash
npm run sync -- --include-planned
```

`status` values:

- `planned` — registry entry exists, repo not created yet. Sync skips it; CI accepts it.
- `active` — repo exists and is aggregated. Sync adds it; CI fails if it disappears.

Once the submodule is in place, add cross-project views that reference its systems by **fully qualified name**. LikeC4 does not inherit container scope across files, so `beauty.backend.api` must be written out in full.

## CI

`.github/workflows/architecture.yml` runs on push and pull request:

1. checkout with `submodules: recursive`
2. `npm run sync:check` — registry and reality agree
3. `npm run validate` — model is valid
4. `npm run format:check` — formatting gate
5. `npm run build` — then publish to `gh-pages` on `main`

PNG/JPEG export is intentionally **not** in CI. It needs Playwright and is the most likely source of pipeline flakiness.

## Agent access

Point an MCP server at this repo to let agents query the aggregated model:

```json
{
  "mcp": {
    "likec4": {
      "type": "local",
      "command": ["npx", "-y", "@likec4/mcp"],
      "enabled": true,
      "environment": { "LIKEC4_WORKSPACE": "." }
    }
  }
}
```

`@likec4/mcp` bundles its own LikeC4 kernel, so this needs no local install. It also watches for changes, so model edits are picked up without a restart.

## Current state

No project design repos exist yet, so the model contains a single placeholder system (`aces`). Once `design-beauty` and `design-maop` are created and synced, replace the `emptyState` view in `src/views/landscape.c4` with real landscape views.
