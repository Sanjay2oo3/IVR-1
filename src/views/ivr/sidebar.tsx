import React from 'react';
import { useDnD } from './DnDContext';
import { Box, Paper, Typography, Divider } from '@mui/material';

export default function Sidebar() {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType: string) => {
    setType(nodeType); // Set the dragged type
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box
      component="aside"
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        borderRight: '1px solid #ddd',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      {/* Sidebar Header */}
      <Typography variant="h6" gutterBottom>
        Drag & Drop Nodes
      </Typography>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        You can drag these nodes to the pane on the right.
      </Typography>

      <Divider sx={{ marginBottom: '20px' }} />

      {/* Draggable Node: Custom StartNode */}
      <Paper
        sx={{
          padding: '10px',
          marginBottom: '10px',
          textAlign: 'center',
          cursor: 'grab',
          backgroundColor: '#ffeb3b',
          '&:hover': {
            backgroundColor: '#fdd835',
          },
        }}
        draggable
        onDragStart={(event) => onDragStart(event, 'StartNode')} // Set StartNode type for dragging
      >
          <img src="/nodeimages/menu.png" alt="Menu" style={{ width: '50px', height: '50px' }} />
      </Paper>
    </Box>
  );
}
