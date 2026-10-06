var e=e=>{switch(e){case`index`:return`---
title: "ACES Landscape"
---
graph TB
  Aces@{ shape: rectangle, label: "ACES Platform" }
`;case`emptyState`:return`---
title: "No projects aggregated yet"
---
graph TB
  AcesNote@{ shape: rectangle, label: "Aggregation Note" }
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};