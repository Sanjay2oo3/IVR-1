'use client'
import { useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'

const handleStyle = { left: 10 }

export default function StartNode({ data }: any) {
  console.log('Start Node Data', data)
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value)
  }, [])

  return (
    <>
      <Handle type='target' position={Position.Top} />
      <div className=' '>
        <img src='/nodeimages/start.png' alt='Start' />
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
    </>
  )
}
