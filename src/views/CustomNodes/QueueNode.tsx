// components/QueueNode.tsx
'use client'

import { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import QueueForm from '../QueNode.tsx/QueueForm'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function QueueNode({ data }: any) {
  const [formOpen, setFormOpen] = useState(false)

  const toggleForm = () => {
    setFormOpen(!formOpen)
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
      onClick={toggleForm} // Toggle form open/close on click
    >
      <div>
        <img src='/images/custom/Queue.png' alt='Queue' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Connection points */}
      <Handle
        type='target'
        position={Position.Left}
        id='queueLeft'
        style={{ ...handleStyle, backgroundColor: 'lightblue' }}
      />
      <Handle type='source' position={Position.Right} id='queueRight' style={handleStyle} />

      {/* Render QueueForm inside QueueNode when formOpen is true */}
      {formOpen && <QueueForm onOpen={toggleForm} />}
    </div>
  )
}
