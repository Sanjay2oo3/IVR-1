'use client'

import { Handle, Position } from '@xyflow/react'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function TimeNode({ data }: any) {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div>
        <img src='/images/custom/time_condition.png' alt='Time' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type='target' position={Position.Left} id='error' style={{ ...handleStyle, backgroundColor: 'red' }} />
      <Handle
        type='target'
        position={Position.Bottom}
        id='timeout'
        style={{ ...handleStyle, backgroundColor: 'pink' }}
      />
      <Handle type='source' position={Position.Right} id='start' style={{ ...handleStyle, backgroundColor: 'green' }} />
    </div>
  )
}
