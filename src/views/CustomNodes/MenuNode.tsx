'use client';

import { Handle, Position } from '@xyflow/react';

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black',
};

export default function MenuNode({ data }: any) {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div>
        <img src="/images/custom/get_input.png" alt="Menu" style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type="target" position={Position.Left} id="error" style={{ ...handleStyle, backgroundColor: 'red' }} />
      <Handle type="target" position={Position.Bottom} id="timeout" style={{ ...handleStyle, backgroundColor: 'pink', left: '40%' }} />
      <Handle type="source" position={Position.Bottom} id="invalid" style={{ ...handleStyle, backgroundColor: 'blue', left: '70%' }} />
      <Handle type="source" position={Position.Right} id="visit-limit" style={{ ...handleStyle, backgroundColor: 'green', top: '20%'}} />
      <Handle type="source" position={Position.Right} id="start" style={{ ...handleStyle, backgroundColor: 'yellow' }} />
    </div>
  );
}
