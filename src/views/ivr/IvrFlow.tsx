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
  Background,
  Connection
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
  CaseWhenNode: CaseWhenNode,
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
  const onConnect = useCallback((params: Connection) => {
    setEdges(eds => addEdge(params, eds))
    console.log("Edge Connection", params)
    dispatch({
      type: "updateNodeRelation", payload: {
        source: params.source,
        destination: params.target
      }
    })
  }, [])

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = { // Define newNode as Node type
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );

  return (
    <div className='dndflow flex h-screen'>
      <div className='sidebar w-[17.5%] bg-gray-100 border-r border-gray-300'>
        <Sidebar />
      </div>
      <div className='reactflow-wrapper flex-1' ref={reactFlowWrapper}>
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
          <div className='h-full'>
            <Controls />
            <MiniMap />
            <Background color='black' />
          </div>
        </ReactFlow>
      </div>
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
