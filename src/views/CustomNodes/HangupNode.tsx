'use client'

import { Handle, Position } from '@xyflow/react'
import { useIvrContext } from '../ivr/IvrContext'

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black'
}

export default function HangupNode({ data }: any) {
  const { IvrData, dispatch } = useIvrContext()
  console.log('Hangupnode', IvrData)
  //dispatch({ type: 'setIvrName', payload: 'ab' })
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div>
        <img src='images/custom/call_hangup.png' alt='HangUp' style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type='target' position={Position.Left} id='error' style={{ ...handleStyle, backgroundColor: 'red' }} />
    </div>
  )
}
