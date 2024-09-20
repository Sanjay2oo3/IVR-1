// components/QueueNode.tsx
'use client'

import { Handle, Position } from '@xyflow/react'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function QueueNode({ data }: any) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}
    >
      <div>
        <img src='/nodeimages/queue.png' alt='Queue' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Connection points */}
      <Handle
        type='target'
        position={Position.Left}
        id='queueLeft'
        style={{ ...handleStyle, backgroundColor: 'lightblue' }}
      />
      <Handle type='source' position={Position.Right} id='queueRight' style={handleStyle} />
    </div>
  )
}
