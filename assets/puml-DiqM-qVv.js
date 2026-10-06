var e=e=>{switch(e){case`index`:return`@startuml
title "ACES Landscape"
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

skinparam rectangle<<Aces>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==ACES Platform\\n\\nGlobal architecture aggregation layer.Owns cross-project views over project-level design repos. It does not\\nhold project-internal design detail: each project keeps its own design\\nrepo, and this layer only composes their system-level views." <<Aces>> as Aces
@enduml
`;case`emptyState`:return`@startuml
title "No projects aggregated yet"
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

skinparam rectangle<<AcesNote>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Aggregation Note\\n\\nPlaceholder so the model compiles before any project repo is synced" <<AcesNote>> as AcesNote
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};