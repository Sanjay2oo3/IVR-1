import React, { createContext, useContext, useState } from 'react';

// Create a context for drag-and-drop
const DnDContext = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>]>([null, () => {}]);

export const useDnD = () => useContext(DnDContext);

// Context provider to share drag-and-drop state
import { ReactNode } from 'react';

export const DnDProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<string | null>(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};
