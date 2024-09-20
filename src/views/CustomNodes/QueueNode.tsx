'use client';

import { Handle, Position } from '@xyflow/react';

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black',
};

export default function QueueNode({ data }: any) {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div>
        <img src="/images/custom/Queue.png" alt="Queue" style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type="target" position={Position.Left} id="timeout" style={{ ...handleStyle, backgroundColor: 'pink' }} />
      </div>
  );
}
