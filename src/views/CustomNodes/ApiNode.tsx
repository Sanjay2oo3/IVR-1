'use client';

import { Handle, Position } from '@xyflow/react';

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black',
};

export default function ApiNode({ data }: any) {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
      <div>
        <img src="/images/custom/api_configuration.png" alt="Menu" style={{ width: '80px', height: '80px' }} />
      </div>

      {/* Add connection points (Handles) for the Menu node */}
      <Handle type="target" position={Position.Left} id="timeout" style={{ ...handleStyle, backgroundColor: 'pink',  }} />
      <Handle type="source" position={Position.Right} id="timeout" style={{ ...handleStyle, backgroundColor: 'blue' }} />
      <Handle type="source" position={Position.Right} id="visit-limit" style={{ ...handleStyle, backgroundColor: 'green', top:'20%'}} />
    </div>
  );
}
