'use client'

import { Handle, Position, useReactFlow } from '@xyflow/react'
import { useState } from 'react'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function ApiNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer
  const reactFlowInstance = useReactFlow() // Access the React Flow instance

  // Function to delete the node
  const handleDeleteNode = () => {
    reactFlowInstance.deleteElements({ nodes: [{ id: data.id }] }) // Deletes node by its ID
  }
  return (
    <div
      style={{
        position: 'relative', // To position handles relative to the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
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
      <div>
        <img src='/images/custom/ivr_list.png' alt='API' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle
        type='target'
        position={Position.Left}
        id='hangupLeft'
        style={{
          ...handleStyle,
          left: '-6px', // Slightly outside the left edge
          top: '50%', // Centered vertically
          transform: 'translateY(-50%)',
          backgroundColor: '#F4DAB3'
          // Adjust for centering
        }}
      />

      {/* Right connection point (source) */}
      <Handle
        type='source'
        position={Position.Right}
        id='hangupRight'
        style={{
          ...handleStyle,
          right: '-6px', // Slightly outside the right edge
          top: '50%', // Centered vertically
          transform: 'translateY(-50%)',
          backgroundColor: 'green' // Adjust for centering
        }}
      />
    </div>
  )
}
