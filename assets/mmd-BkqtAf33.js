var e=e=>{switch(e){case`index`:return`---
title: "ACES Platform Landscape"
---
graph TB
  Operator@{ icon: "fa:user", shape: rounded, label: "Platform Operator" }
  Aces@{ shape: rectangle, label: "ACES Platform" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Operator -. "\`operates\`" .-> Aces
  Aces -. "\`sends and receives messages\`" .-> WechatWork
  Aces -. "\`retrieves knowledge\`" .-> Ragflow
  Aces -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`crossSystem`:return`---
title: "Cross-System Relationships"
---
graph TB
  Operator@{ icon: "fa:user", shape: rounded, label: "Platform Operator" }
  Aces@{ shape: rectangle, label: "ACES Platform" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Operator -. "\`operates\`" .-> Aces
  Aces -. "\`sends and receives messages\`" .-> WechatWork
  Aces -. "\`retrieves knowledge\`" .-> Ragflow
  Aces -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`sharedDependencies`:return`---
title: "Shared Platform Dependencies"
---
graph TB
  subgraph Aces["\`ACES Platform\`"]
    Aces.Beauty@{ shape: rectangle, label: "Beauty Customer Service" }
  end
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Aces.Beauty -. "\`sends and receives messages\`" .-> WechatWork
  Aces.Beauty -. "\`retrieves knowledge\`" .-> Ragflow
  Aces.Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};