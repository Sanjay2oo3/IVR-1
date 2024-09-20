import React, { useState, useCallback } from 'react';

import { Handle, Position } from '@xyflow/react';


export default function StartNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="relative">
        <img src="/nodeimages/start.png" alt="Start" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
