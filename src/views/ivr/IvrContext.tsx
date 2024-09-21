import React, { createContext, useContext, useReducer } from 'react'
import { IvrMetaDataTypes, IvrContextAction } from './IvrTypes' // Importing types

// Create the context
export const Ivrcontent = createContext<any>({})

// Initial state
const initialMetaData: IvrMetaDataTypes = {
    IvrName: 'Test', // Example data
    IvrUniqueNumber: '-1',
    Language: 'English',
    BranchName: 'Branch-1',
    nodeData: {},
    nodeRelationship: {},
    nodeType: {}
}

// Reducer function to handle state changes
const reducer = (state: IvrMetaDataTypes, action: IvrContextAction): IvrMetaDataTypes => {
    switch (action.type) {
        case 'setIvrData': {
            return {
                ...state,
                nodeData: { ...state.nodeData, [action.payload.nodeId]: action.payload.formValues }
            }
        }
        case 'updateNodeRelation': {
            const nodeRelation = state.nodeRelationship
            const sourceRelationArray = state.nodeRelationship[action.payload.source] || []
            console.log("UpdateNode relation called", sourceRelationArray);
            console.log("update node relation action", action);
            return {
                ...state,
                nodeRelationship: {
                    ...nodeRelation,
                    [action.payload.source]: [...sourceRelationArray, action.payload.destination]
                }
            }
        }
        case "updateNodeType": {
            console.log("updateNode Type::", action);
            return {
                ...state,
                nodeType: {
                    ...state.nodeType,
                    [action.payload.id]: action.payload.type
                }
            }

        }
        default:
            return state
    }
}

// Context provider component
export default function IvrContext(props: any) {
    const [IvrData, dispatch] = useReducer<any>(reducer, initialMetaData)
    return <Ivrcontent.Provider value={{ IvrData, dispatch }}>{props.children}</Ivrcontent.Provider>
}

// Custom hook to use the IvrContext
export const useIvrContext = () => {
    const context = useContext(Ivrcontent)
    if (context === undefined) {
        throw new Error('useIvrContext must be used within a IvrContextProvider')
    }
    return context
}
