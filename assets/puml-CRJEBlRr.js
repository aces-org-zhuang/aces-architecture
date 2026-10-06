var e=e=>{switch(e){case`index`:return`@startuml
title "ACES Platform Landscape"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Aces>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Platform Operator\\n\\nOperates knowledge and escalations across projects" <<Operator>> as Operator
rectangle "==ACES Platform\\n\\nCross-project aggregation. Each project keeps its own design repo;\\nthis layer composes their system-level views only." <<Aces>> as Aces
rectangle "==WeChat Work\\n\\nShared messaging platform" <<WechatWork>> as WechatWork
rectangle "==RAGFlow\\n\\nShared RAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki\\n\\nShared wiki candidate source" <<LlmWiki>> as LlmWiki

Operator .[#8D8D8D,thickness=2].> Aces : <color:#8D8D8D>operates
Aces .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>sends and receives messages
Aces .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>retrieves knowledge
Aces .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`crossSystem`:return`@startuml
title "Cross-System Relationships"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Aces>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Platform Operator\\n\\nOperates knowledge and escalations across projects" <<Operator>> as Operator
rectangle "==ACES Platform\\n\\nCross-project aggregation. Each project keeps its own design repo;\\nthis layer composes their system-level views only." <<Aces>> as Aces
rectangle "==WeChat Work\\n\\nShared messaging platform" <<WechatWork>> as WechatWork
rectangle "==RAGFlow\\n\\nShared RAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki\\n\\nShared wiki candidate source" <<LlmWiki>> as LlmWiki

Operator .[#8D8D8D,thickness=2].> Aces : <color:#8D8D8D>operates
Aces .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>sends and receives messages
Aces .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>retrieves knowledge
Aces .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`sharedDependencies`:return`@startuml
title "Shared Platform Dependencies"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<AcesBeauty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "ACES Platform" <<Aces>> as Aces {
  skinparam RectangleBorderColor<<Aces>> #3b82f6
  skinparam RectangleFontColor<<Aces>> #3b82f6
  skinparam RectangleBorderStyle<<Aces>> dashed

  rectangle "==Beauty Customer Service\\n\\nWeChat-based beauty consultation and knowledge service" <<AcesBeauty>> as AcesBeauty
}
rectangle "==WeChat Work\\n\\nShared messaging platform" <<WechatWork>> as WechatWork
rectangle "==RAGFlow\\n\\nShared RAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki\\n\\nShared wiki candidate source" <<LlmWiki>> as LlmWiki

AcesBeauty .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>sends and receives messages
AcesBeauty .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>retrieves knowledge
AcesBeauty .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};