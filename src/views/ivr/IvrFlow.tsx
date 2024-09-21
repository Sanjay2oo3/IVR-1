'use client'
import React, { useRef, useCallback } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  MiniMap,
  Background
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import Sidebar from './sidebar'
import { DnDProvider, useDnD } from './DnDContext'
import StartNode from '../CustomNodes/StartNode'

import './index.css'
import MenuNode from '../CustomNodes/MenuNode'
import TimeNode from '../CustomNodes/TimeNode'
import HangupNode from '../CustomNodes/HangupNode'
import ApiNode from '../CustomNodes/ApiNode'
import IvrNode from '../CustomNodes/IvrNode'
import PlayMessageNode from '../CustomNodes/PlayMessageNode'
import QueueNode from '../CustomNodes/QueueNode'
import UserFeedbackNode from '../CustomNodes/UserFeedbackNode'
import UserInputNode from '../CustomNodes/UserInputNode'
import IvrContext, { useIvrContext } from './IvrContext'
import { v4 as uuidv4 } from 'uuid';
import LangaugeNode from '../CustomNodes/LangaugeNode'
import TtsNode from '../CustomNodes/TtsNode'
import CaseWhenNode from '../CustomNodes/CaseWhenNode'
import CallbackNode from '../CustomNodes/CallbackNode'
import SessionVariableNode from '../CustomNodes/SessionVariableNode'
import LuaNode from '../CustomNodes/LuaNode'

// Initial nodes setup (can have an empty array if you don't want the default node)
const initialNodes = [
  {
    id: '1',
    type: 'StartNode',
    data: { label: 'Start node' },
    position: { x: 150, y: 5 }
  }
]

// Custom node types
const nodeTypes = {
  StartNode: StartNode,
  MenuNode: MenuNode,
  TimeNode: TimeNode,
  HangupNode: HangupNode,
  ApiNode: ApiNode,
  IvrNode: IvrNode,
  PlayMessageNode: PlayMessageNode,
  QueueNode: QueueNode,
  UserFeedbackNode: UserFeedbackNode,
  UserInputNode: UserInputNode,
  LangaugeNode: LangaugeNode,
  TtsNode: TtsNode,
  CaseWhenNode : CaseWhenNode,
  CallbackNode: CallbackNode,
  SessionVariableNode: SessionVariableNode,
  LuaNode: LuaNode,
  
}

let id = 0
const getId = () => uuidv4();

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  console.log('edges', edges)
  const { screenToFlowPosition } = useReactFlow()
  const [type] = useDnD() // Retrieves the dragged node type
  const { IvrData, dispatch } = useIvrContext();
  const onConnect = useCallback(params => {
    setEdges(eds => addEdge(params, eds))
    console.log("Edge Connection",params)
    dispatch({
      type: "updateNodeRelation", payload: {
        source: params.source,
        destination: params.destination
      }
    })
  }, [])

  const onDragOver = useCallback(event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    event => {
      event.preventDefault()

      // Check if the dropped element is valid
      if (!type) {
        return
      }

      // Get drop position and create a new node with the dragged type
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      })
      const id = getId();
      const newNode = {
        id: id,
        type, // Use the dragged type (can be 'StartNode')
        position,
        data: { label: `${type} node`, id }
      }

      setNodes(nds => nds.concat(newNode))
    },
    [screenToFlowPosition, type]
  )

  return (
    <div className='dndflow'>
      <div className='reactflow-wrapper' ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes} // Custom node types
          fitView
        >
          <Controls />
          <MiniMap />
          <Background color='black' />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  )
}

export default () => (
  <IvrContext>
    <ReactFlowProvider>
      <DnDProvider>
        <DnDFlow />
      </DnDProvider>
    </ReactFlowProvider>
  </IvrContext>
)
