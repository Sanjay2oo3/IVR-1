// IvrMetaData type for the state structure
export type IvrMetaDataTypes = {
    IvrName: string
    IvrUniqueNumber: string
    Language: string
    BranchName: string
    nodeData: Record<string, any>
    nodeRelationship: Record<string, string[]>
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
  
  // Union type for all possible action types
  export type IvrContextAction = SetIvrDataAction | UpdateNodeRelationAction
  