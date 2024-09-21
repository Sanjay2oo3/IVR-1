'use client'

import { Handle, Position, useReactFlow } from '@xyflow/react'
import { useState } from 'react'
import MenuForm from '../MenuNode/MenuFrom'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function MenuNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer
  const reactFlowInstance = useReactFlow(); // Access the React Flow instance

  // Function to toggle drawer open state
  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  // Function to delete the node
  const handleDeleteNode = () => {
    reactFlowInstance.deleteElements({ nodes: [{ id: data.id }] }); // Deletes node by its ID
  }

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      {/* Close (Delete) Button */}
      <div
        onClick={handleDeleteNode}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          cursor: 'pointer',
          backgroundColor: 'red',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%'
        }}
      >
        X
      </div>

      <div onClick={handleOpenDrawer} style={{ cursor: 'pointer' }}>
        <img src='/nodeimages/menu.png' alt='Menu' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type='source' position={Position.Left} id='error' style={{ ...handleStyle, backgroundColor: 'red' }} />
      <Handle
        type='target'
        position={Position.Bottom}
        id='timeout'
        style={{ ...handleStyle, backgroundColor: 'pink', left: '40%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='invalid'
        style={{ ...handleStyle, backgroundColor: 'blue', left: '70%' }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id='visit-limit'
        style={{ ...handleStyle, backgroundColor: 'green', top: '20%' }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id='start'
        style={{ ...handleStyle, backgroundColor: 'yellow' }}
      />

      {/* Render the MenuFormDrawer and pass the open state */}
      <MenuForm open={openDrawer} onClose={() => setOpenDrawer(false)} nodeId={data.id} />
    </div>
  )
}
