'use client'

import { Handle, Position, useReactFlow } from '@xyflow/react'
import { useIvrContext } from '../ivr/IvrContext'
import HangUpForm from '../HangUpNode/HangUpForm'
import { useState } from 'react'

const handleStyle = {
  width: 12, // Handle size
  height: 12, // Handle size
  borderRadius: '50%', // Circular shape for the dots
  backgroundColor: '#4CAF50', // Green color for the handles
  border: '2px solid #000', // Dark border for visibility
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' // Optional shadow for effect
}

export default function HangupNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer
 const reactFlowInstance = useReactFlow() // Access the React Flow instance


  // Function to delete the node
  const handleDeleteNode = () => {
    reactFlowInstance.deleteElements({ nodes: [{ id: data.id }] }) // Deletes node by its ID
  }

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
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
      <div onClick={handleOpenDrawer} style={{ cursor: 'pointer' }}>
        <img src='/images/custom/call_hangup.png' alt='Time' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Left connection point (target) */}
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
      {/* Render TimeForm inside TimeNode when formOpen is true */}
      <HangUpForm open={openDrawer} onClose={() => setOpenDrawer(false)} nodeId={data.id} />
    </div>
  )
}
