// components/QueueNode.tsx
'use client'

import { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import QueueForm from '../QueueNode.tsx/QueueForm'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function QueueNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer

  // Function to toggle drawer open state
  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer' // Change cursor to pointer on hover
      }}
    >
      <div onClick={handleOpenDrawer} style={{ cursor: 'pointer' }}>
        <img src='/images/custom/Queue.png' alt='Queue' style={{ width: '80px', height: '80px' }} />
        {/* Click here to open form */}
      </div>

      {/* Connection points */}
      <Handle
        type='target'
        position={Position.Left}
        id='queueLeft'
        style={{ ...handleStyle, backgroundColor: 'lightblue' }}
      />
      <Handle type='source' position={Position.Right} id='queueRight' style={handleStyle} />

      {/* Render the QueueFormDrawer and pass the open state */}
      <QueueForm open={openDrawer} onClose={() => setOpenDrawer(false)} nodeId={data.id} />
    </div>
  )
}
