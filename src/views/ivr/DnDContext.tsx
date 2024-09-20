import React, { createContext, useContext, useState } from 'react';

// Create a context for drag-and-drop
const DnDContext = createContext();

export const useDnD = () => useContext(DnDContext);

// Context provider to share drag-and-drop state
export const DnDProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};
