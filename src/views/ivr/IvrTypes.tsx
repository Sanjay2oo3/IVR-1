// IvrMetaData type for the state structure
export type IvrMetaDataTypes = {
  IvrName: string
  IvrUniqueNumber: string
  Language: string
  BranchName: string
  nodeData: Record<string, any>
  nodeRelationship: Record<string, string[]>
  nodeType: Record<string, string> // type of node (e.g., "MenuNode", "TimeNode", etc.)
}

// Define the structure of actions for the reducer
export type SetIvrDataAction = {
  type: 'setIvrData'
  payload: {
    nodeId: string
    formValues: any
  }
}

export type UpdateNodeRelationAction = {
  type: 'updateNodeRelation'
  payload: {
    source: string
    destination: string
  }
}
export type UpdateNodeType = {
  type: "updateNodeType",
  payload: {
    id: string,
    type: string  // type of node (e.g., "MenuNode", "TimeNode", etc.)
  }
}
export type UpdateIvrInfo = {
  type: "updateIvrInfo",
  payload: {
    IvrName: string
    IvrUniqueNumber: string
    Language: string
    BranchName: string
  }
}

// Union type for all possible action types
export type IvrContextAction = SetIvrDataAction | UpdateNodeRelationAction | UpdateNodeType | UpdateIvrInfo
