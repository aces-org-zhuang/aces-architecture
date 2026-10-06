var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Operates knowledge and escalations across<BR/>projects</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ACES Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Cross-project aggregation. Each project keeps<BR/>its own design repo;<BR/>this layer composes their system-level views<BR/>only.</FONT></TD></TR></TABLE>>,
        likec4_id=aces,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> aces [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">operates</FONT></TD></TR></TABLE>>,
        likec4_id=twg07y,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared messaging platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends and receives messages</FONT></TD></TR></TABLE>>,
        likec4_id="2y5nsj",
        minlen=1,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves knowledge</FONT></TD></TR></TABLE>>,
        likec4_id=yg1lh4,
        minlen=1,
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id=gzg6tr,
        minlen=1,
        style=dashed];
}
`;case`crossSystem`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=crossSystem,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Operates knowledge and escalations across<BR/>projects</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ACES Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Cross-project aggregation. Each project keeps<BR/>its own design repo;<BR/>this layer composes their system-level views<BR/>only.</FONT></TD></TR></TABLE>>,
        likec4_id=aces,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> aces [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">operates</FONT></TD></TR></TABLE>>,
        likec4_id=twg07y,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared messaging platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends and receives messages</FONT></TD></TR></TABLE>>,
        likec4_id="2y5nsj",
        minlen=1,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves knowledge</FONT></TD></TR></TABLE>>,
        likec4_id=yg1lh4,
        minlen=1,
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aces -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id=gzg6tr,
        minlen=1,
        style=dashed];
}
`;case`sharedDependencies`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=sharedDependencies,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_aces {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACES PLATFORM</B></FONT>>,
            likec4_depth=1,
            likec4_id=aces,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        beauty [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Beauty Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat-based beauty consultation and<BR/>knowledge service</FONT></TD></TR></TABLE>>,
            likec4_id="aces.beauty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared messaging platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends and receives messages</FONT></TD></TR></TABLE>>,
        likec4_id="1vg2rqb",
        minlen=1,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves knowledge</FONT></TD></TR></TABLE>>,
        likec4_id="1tppcx4",
        minlen=1,
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Shared wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id=rk3y3j,
        minlen=1,
        style=dashed];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="856pt"
 viewBox="0.00 0.00 1210.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="757.25,-825.6 422.79,-825.6 422.79,-645.6 757.25,-645.6 757.25,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="510.55" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Platform Operator</text>
<text xml:space="preserve" text-anchor="start" x="442.85" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Operates knowledge and escalations across</text>
<text xml:space="preserve" text-anchor="start" x="563.76" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">projects</text>
</g>
<!-- aces -->
<g id="node2" class="node">
<title>aces</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="764.32,-502.8 415.72,-502.8 415.72,-322.8 764.32,-322.8 764.32,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="522.78" y="-442.8" font-family="Arial" font-size="20.00" fill="#eff6ff">ACES Platform</text>
<text xml:space="preserve" text-anchor="start" x="435.77" y="-419.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Cross&#45;project aggregation. Each project keeps</text>
<text xml:space="preserve" text-anchor="start" x="523.31" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">its own design repo;</text>
<text xml:space="preserve" text-anchor="start" x="442.47" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">this layer composes their system&#45;level views</text>
<text xml:space="preserve" text-anchor="start" x="574.18" y="-365.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">only.</text>
</g>
<!-- wechatwork -->
<g id="node3" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="68.31" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared messaging platform</text>
</g>
<!-- ragflow -->
<g id="node4" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="547.24" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="450.77" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared RAG and knowledge base service</text>
</g>
<!-- llmwiki -->
<g id="node5" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="978.91" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="922.05" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared wiki candidate source</text>
</g>
<!-- operator&#45;&gt;aces -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;aces</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-645.67C590.02,-604.47 590.02,-555.36 590.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-513.16 590.02,-505.66 587.4,-513.16 592.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-562.8 590.02,-585.6 650.5,-585.6 650.5,-562.8 590.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">operates</text>
</g>
<!-- aces&#45;&gt;wechatwork -->
<g id="edge2" class="edge">
<title>aces&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M453.39,-322.82C425.04,-303.53 395.62,-282.87 368.7,-262.8 336.62,-238.88 302.75,-211.84 271.86,-186.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="273.86,-184.65 266.4,-181.9 270.51,-188.7 273.86,-184.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="368.7,-240 368.7,-262.8 563.02,-262.8 563.02,-240 368.7,-240"/>
<text xml:space="preserve" text-anchor="start" x="371.7" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends and receives messages</text>
</g>
<!-- aces&#45;&gt;ragflow -->
<g id="edge3" class="edge">
<title>aces&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-322.87C590.02,-281.67 590.02,-232.56 590.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.36 590.02,-182.86 587.4,-190.36 592.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-240 590.02,-262.8 720.53,-262.8 720.53,-240 590.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves knowledge</text>
</g>
<!-- aces&#45;&gt;llmwiki -->
<g id="edge4" class="edge">
<title>aces&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M709.23,-322.87C766.32,-280.27 834.74,-229.23 892.83,-185.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="894.09,-188.23 898.53,-181.64 890.95,-184.02 894.09,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-262.8 950.76,-262.8 950.76,-240 817.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="820.91" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
</g>
</svg>
`;case`crossSystem`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="856pt"
 viewBox="0.00 0.00 1210.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="757.25,-825.6 422.79,-825.6 422.79,-645.6 757.25,-645.6 757.25,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="510.55" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Platform Operator</text>
<text xml:space="preserve" text-anchor="start" x="442.85" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Operates knowledge and escalations across</text>
<text xml:space="preserve" text-anchor="start" x="563.76" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">projects</text>
</g>
<!-- aces -->
<g id="node2" class="node">
<title>aces</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="764.32,-502.8 415.72,-502.8 415.72,-322.8 764.32,-322.8 764.32,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="522.78" y="-442.8" font-family="Arial" font-size="20.00" fill="#eff6ff">ACES Platform</text>
<text xml:space="preserve" text-anchor="start" x="435.77" y="-419.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Cross&#45;project aggregation. Each project keeps</text>
<text xml:space="preserve" text-anchor="start" x="523.31" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">its own design repo;</text>
<text xml:space="preserve" text-anchor="start" x="442.47" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">this layer composes their system&#45;level views</text>
<text xml:space="preserve" text-anchor="start" x="574.18" y="-365.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">only.</text>
</g>
<!-- wechatwork -->
<g id="node3" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="68.31" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared messaging platform</text>
</g>
<!-- ragflow -->
<g id="node4" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="547.24" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="450.77" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared RAG and knowledge base service</text>
</g>
<!-- llmwiki -->
<g id="node5" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="978.91" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="922.05" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared wiki candidate source</text>
</g>
<!-- operator&#45;&gt;aces -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;aces</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-645.67C590.02,-604.47 590.02,-555.36 590.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-513.16 590.02,-505.66 587.4,-513.16 592.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-562.8 590.02,-585.6 650.5,-585.6 650.5,-562.8 590.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">operates</text>
</g>
<!-- aces&#45;&gt;wechatwork -->
<g id="edge2" class="edge">
<title>aces&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M453.39,-322.82C425.04,-303.53 395.62,-282.87 368.7,-262.8 336.62,-238.88 302.75,-211.84 271.86,-186.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="273.86,-184.65 266.4,-181.9 270.51,-188.7 273.86,-184.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="368.7,-240 368.7,-262.8 563.02,-262.8 563.02,-240 368.7,-240"/>
<text xml:space="preserve" text-anchor="start" x="371.7" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends and receives messages</text>
</g>
<!-- aces&#45;&gt;ragflow -->
<g id="edge3" class="edge">
<title>aces&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-322.87C590.02,-281.67 590.02,-232.56 590.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.36 590.02,-182.86 587.4,-190.36 592.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-240 590.02,-262.8 720.53,-262.8 720.53,-240 590.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves knowledge</text>
</g>
<!-- aces&#45;&gt;llmwiki -->
<g id="edge4" class="edge">
<title>aces&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M709.23,-322.87C766.32,-280.27 834.74,-229.23 892.83,-185.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="894.09,-188.23 898.53,-181.64 890.95,-184.02 894.09,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-262.8 950.76,-262.8 950.76,-240 817.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="820.91" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
</g>
</svg>
`;case`sharedDependencies`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="594pt"
 viewBox="0.00 0.00 1210.00 594.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 579.05)">
<g id="clust1" class="cluster">
<title>cluster_aces</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="398.02,-290.8 398.02,-556 782.02,-556 782.02,-290.8 398.02,-290.8"/>
<text xml:space="preserve" text-anchor="start" x="406.02" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACES PLATFORM</text>
</g>
<!-- beauty -->
<g id="node1" class="node">
<title>beauty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="476.64" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Beauty Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="458.69" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat&#45;based beauty consultation and</text>
<text xml:space="preserve" text-anchor="start" x="528.32" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">knowledge service</text>
</g>
<!-- wechatwork -->
<g id="node2" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="68.31" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared messaging platform</text>
</g>
<!-- ragflow -->
<g id="node3" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="547.24" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="450.77" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared RAG and knowledge base service</text>
</g>
<!-- llmwiki -->
<g id="node4" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="978.91" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="922.05" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Shared wiki candidate source</text>
</g>
<!-- beauty&#45;&gt;wechatwork -->
<g id="edge1" class="edge">
<title>beauty&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M453.39,-322.82C425.04,-303.53 395.62,-282.87 368.7,-262.8 336.62,-238.88 302.75,-211.84 271.86,-186.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="273.86,-184.65 266.4,-181.9 270.51,-188.7 273.86,-184.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="368.7,-240 368.7,-262.8 563.02,-262.8 563.02,-240 368.7,-240"/>
<text xml:space="preserve" text-anchor="start" x="371.7" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends and receives messages</text>
</g>
<!-- beauty&#45;&gt;ragflow -->
<g id="edge2" class="edge">
<title>beauty&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-322.87C590.02,-281.67 590.02,-232.56 590.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.36 590.02,-182.86 587.4,-190.36 592.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-240 590.02,-262.8 720.53,-262.8 720.53,-240 590.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves knowledge</text>
</g>
<!-- beauty&#45;&gt;llmwiki -->
<g id="edge3" class="edge">
<title>beauty&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M709.23,-322.87C766.32,-280.27 834.74,-229.23 892.83,-185.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="894.09,-188.23 898.53,-181.64 890.95,-184.02 894.09,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-262.8 950.76,-262.8 950.76,-240 817.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="820.91" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};