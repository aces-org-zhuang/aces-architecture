var e=e=>{switch(e){case`index`:return`direction: down

Operator: {
  label: "Platform Operator"
  shape: c4-person
}
Aces: {
  label: "ACES Platform"
}
WechatWork: {
  label: "WeChat Work"
}
Ragflow: {
  label: "RAGFlow"
}
LlmWiki: {
  label: "LLM Wiki"
}

Operator -> Aces: "operates"
Aces -> WechatWork: "sends and receives messages"
Aces -> Ragflow: "retrieves knowledge"
Aces -> LlmWiki: "reads candidate wiki"
`;case`crossSystem`:return`direction: down

Operator: {
  label: "Platform Operator"
  shape: c4-person
}
Aces: {
  label: "ACES Platform"
}
WechatWork: {
  label: "WeChat Work"
}
Ragflow: {
  label: "RAGFlow"
}
LlmWiki: {
  label: "LLM Wiki"
}

Operator -> Aces: "operates"
Aces -> WechatWork: "sends and receives messages"
Aces -> Ragflow: "retrieves knowledge"
Aces -> LlmWiki: "reads candidate wiki"
`;case`sharedDependencies`:return`direction: down

Aces: {
  label: "ACES Platform"

  Beauty: {
    label: "Beauty Customer Service"
  }
}
WechatWork: {
  label: "WeChat Work"
}
Ragflow: {
  label: "RAGFlow"
}
LlmWiki: {
  label: "LLM Wiki"
}

Aces.Beauty -> WechatWork: "sends and receives messages"
Aces.Beauty -> Ragflow: "retrieves knowledge"
Aces.Beauty -> LlmWiki: "reads candidate wiki"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};