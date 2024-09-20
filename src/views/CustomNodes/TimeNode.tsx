// components/TimeNode.tsx
'use client'

import { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import TimeForm from '../TimeNode/TimeForm'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function TimeNode({ data }: any) {
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
        cursor: 'pointer' // Change cursor to pointer on hover
      }}
      onClick={toggleForm} // Toggle form open/close on click
    >
      <div>
        <img src='/images/custom/time_condition.png' alt='Time' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Connection points */}
      <Handle type='target' position={Position.Left} id='error' style={{ ...handleStyle, backgroundColor: 'red' }} />
      <Handle
        type='target'
        position={Position.Bottom}
        id='timeout'
        style={{ ...handleStyle, backgroundColor: 'pink' }}
      />
      <Handle type='source' position={Position.Right} id='start' style={{ ...handleStyle, backgroundColor: 'green' }} />

      {/* Render TimeForm inside TimeNode when formOpen is true */}
      {formOpen && <TimeForm />}
    </div>
  ) 
}
