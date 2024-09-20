import React, { useState, useCallback } from 'react';

import { Handle, Position } from '@xyflow/react';

const handleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#555',
  border: '2px solid black',
};

export default function StartNode({ data }: any) {
  return (
    <>
      <div className="relative">
        <img src="/nodeimages/start.png" alt="Start" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={{ ...handleStyle, backgroundColor: 'green' }}/>
    </>
  );
}
