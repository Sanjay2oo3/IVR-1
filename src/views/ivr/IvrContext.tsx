import React, { createContext, useContext, useReducer } from 'react'

export const Ivrcontent = createContext<any>({})
const initialMetaData = {
  IvrName: 'Test',
  IvrUniqueNumber: '-1',
  Language: 'English',
  BranchName: 'Branch-1'
}
const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case 'setIvrName': {
      return { ...state, IvrName: action.payload.IvrName }
    }
    case 'setIvrUniqueNumber': {
      return { ...state, IvrUniqueNumber: action.payload.IvrUniqueNumber }
    }
    case 'setLanguage': {
      return { ...state, Language: action.payload.Language }
    }
    case 'setBranchName': {
      return { ...state, BranchName: action.payload.BranchName }
    }
    default:
      return state
  }
}
export default function IvrContext(props: any) {
  const [IvrData, dispatch] = useReducer<any>(reducer, initialMetaData)
  return <Ivrcontent.Provider value={{ IvrData, dispatch }}>{props.children}</Ivrcontent.Provider>
}
export const useIvrContext = () => {
  const context = useContext(Ivrcontent)
  if (context === undefined) {
    throw new Error('useConversation must be used within a ConversationProvider')
  }
  return context
}
