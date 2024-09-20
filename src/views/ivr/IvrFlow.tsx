'use client'
import React, { useRef, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Sidebar from './sidebar';
import { DnDProvider, useDnD } from './DnDContext';
import StartNode from '../CustomNodes/StartNode';

import './index.css';
import MenuNode from '../CustomNodes/MenuNode';
import TimeNode from '../CustomNodes/TimeNode';
import HangupNode from '../CustomNodes/HangupNode';
import ApiNode from '../CustomNodes/ApiNode';
import IvrNode from '../CustomNodes/IvrNode';
import PlayMessageNode from '../CustomNodes/PlayMessageNode';
import QueueNode from '../CustomNodes/QueueNode';
import UserFeedbackNode from '../CustomNodes/UserFeedbackNode';
import UserInputNode from '../CustomNodes/UserInputNode';

// Initial nodes setup (can have an empty array if you don't want the default node)
const initialNodes = [
  {
    id: '1',
    type: 'StartNode',
    data: { label: 'hello node' },
    position: { x: 250, y: 5 },
  },
];

// Custom node types
const nodeTypes = { StartNode: StartNode,MenuNode:MenuNode,TimeNode:TimeNode,HangupNode:HangupNode,ApiNode:ApiNode, IvrNode:IvrNode, PlayMessageNode:PlayMessageNode, QueueNode:QueueNode, UserFeedbackNode:UserFeedbackNode, UserInputNode:UserInputNode};

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD(); // Retrieves the dragged node type

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // Check if the dropped element is valid
      if (!type) {
        return;
      }

      // Get drop position and create a new node with the dragged type
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type, // Use the dragged type (can be 'StartNode')
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );

  return (
    <div className="dndflow">
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
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
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);
