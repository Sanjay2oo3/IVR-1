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

export default function LangaugeNode({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState(false) // State to toggle drawer

  // Function to toggle drawer open state
  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div onClick={handleOpenDrawer} style={{ cursor: 'pointer' }}>
        <img src='/images/custom/language_menu.png' alt='Language Node' style={{ width: '80px', height: '80px' }} />
        {/* Click here to open form */}
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
        style={{ ...handleStyle, backgroundColor: 'red' }}
      />

      {/* Render the MenuFormDrawer and pass the open state */}
      {/* <MenuForm open={openDrawer} onClose={() => setOpenDrawer(false)} /> */}
    </div>
  )
}
