'use client'
import React, { useState, useCallback } from 'react'
import { Background, ReactFlow, Controls, applyEdgeChanges, applyNodeChanges, addEdge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import StartNode from '../CustomNodes/StartNode'
const initialEdges: any = []

const initialNodes = [
  {
    id: 'node-1',
    type: 'StartNode',
    position: { x: 0, y: 0 },
    data: { value: 123 }
  }
]
const nodeTypes = { StartNode: StartNode }

export default function IvrFlow() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const onNodesChange = useCallback((changes: any) => setNodes(nds => applyNodeChanges(changes, nds)), [])
  const onEdgesChange = useCallback((changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)), [])
  const onConnect = useCallback((params: any) => setEdges((eds: any) => addEdge(params, eds)), [])

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
