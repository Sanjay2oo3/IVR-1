'use client'

import { Handle, Position } from '@xyflow/react'
import { useState } from 'react'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function CaseWhenNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer

  // Function to toggle drawer open state
  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div onClick={handleOpenDrawer} style={{ cursor: 'pointer' }}>
        <img src='/images/custom/case_when.png' alt='Case When' style={{ width: '80px', height: '80px' }} />
        {/* Click here to open form */}
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type='source' position={Position.Left} id='error' style={{ ...handleStyle, backgroundColor: 'red' }} />

      <Handle
        type='source'
        position={Position.Right}
        id='visit-limit'
        style={{ ...handleStyle, backgroundColor: 'green', top: '20%' }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id='error'
        style={{ ...handleStyle, backgroundColor: 'red' }}
      />

      {/* Render the MenuFormDrawer and pass the open state */}
      {/* <MenuForm open={openDrawer} onClose={() => setOpenDrawer(false)} /> */}
    </div>
  )
}
