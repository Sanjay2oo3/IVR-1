// import React from 'react';
// import { useDnD } from './DnDContext';
// import { Box, Paper, Typography, Divider } from '@mui/material';

// export default function Sidebar() {
//   const [_, setType] = useDnD();

//   const onDragStart = (event, nodeType: string) => {
//     setType(nodeType); // Set the dragged type
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <Box
//       component="aside"
//       sx={{
//         width: 240,
//         height: '100vh',
//         backgroundColor: '#f5f5f5',
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '20px',
//         boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
//         borderRight: '1px solid #ddd',
//         position: 'fixed',
//         left: 0,
//         top: 0,
//       }}
//     >
//       {/* Sidebar Header */}
//       <Typography variant="h6" gutterBottom>
//         Drag & Drop Nodes
//       </Typography>

//       <Typography variant="body2" color="textSecondary" gutterBottom>
//         You can drag these nodes to the pane on the right.
//       </Typography>

//       <Divider sx={{ marginBottom: '20px' }} />

//       {/* Draggable Node: Custom StartNode */}
//       <Paper
//         sx={{
//           padding: '10px',
//           marginBottom: '10px',
//           textAlign: 'center',
//           cursor: 'grab',
//           backgroundColor: '#ffeb3b',
//           '&:hover': {
//             backgroundColor: '#fdd835',
//           },
//         }}
//         draggable
//         onDragStart={(event) => onDragStart(event, 'StartNode')} // Set StartNode type for dragging
//       >
//           <img src="/nodeimages/menu.png" alt="Menu" style={{ width: '50px', height: '50px' }} />
//       </Paper>
//     </Box>
//   );
// }

// import React from 'react';
// import { useDnD } from './DnDContext';
// import { Box, Paper, Typography, Divider, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// export default function Sidebar() {
//   const [_, setType] = useDnD();

//   const onDragStart = (event, nodeType: string) => {
//     setType(nodeType); // Set the dragged type
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <Box
//       component="aside"
//       className="w-96 h-screen bg-white flex flex-col p-6 shadow-lg border-r border-gray-300 fixed left-0 top-0"
//     >
//       {/* Sidebar Header */}
//       <Typography variant="h5" className="text-blue-600 mb-4">
//         IVR Design
//       </Typography>

//       <Divider className="mb-6" />

//       {/* IVR Name Field */}
//       <TextField
//         label="IVR Name"
//         variant="outlined"
//         className="mb-4"
//         fullWidth
//       />

//       {/* IVR Unique Number Field */}
//       <TextField
//         label="IVR Unique No."
//         variant="outlined"
//         className="mb-4"
//         fullWidth
//       />

//       {/* Language Dropdown */}
//       <FormControl variant="outlined" className="mb-4" fullWidth>
//         <InputLabel>Language</InputLabel>
//         <Select label="Language">
//           <MenuItem value="en">English</MenuItem>
//           <MenuItem value="es">Spanish</MenuItem>
//           <MenuItem value="fr">French</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Branch Name Dropdown */}
//       <FormControl variant="outlined" className="mb-4" fullWidth>
//         <InputLabel>Branch Name</InputLabel>
//         <Select label="Branch Name">
//           <MenuItem value="branch1">Branch 1</MenuItem>
//           <MenuItem value="branch2">Branch 2</MenuItem>
//           <MenuItem value="branch3">Branch 3</MenuItem>
//         </Select>
//       </FormControl>

//       <Divider className="mb-6" />

//       <Typography variant="body2" color="textSecondary" className="mb-4">
//         Drag & Drop Nodes
//       </Typography>

//       {/* Draggable Nodes in a Row */}
//       <Box className="flex justify-between">
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'StartNode')} // Set StartNode type for dragging
//           >
//             <img src="/nodeimages/menu.png" alt="Menu" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Start Node
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'StartNode')} // Set StartNode type for dragging
//           >
//             <img src="/nodeimages/menu.png" alt="Menu" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Start Node
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'StartNode')} // Set StartNode type for dragging
//           >
//             <img src="/nodeimages/menu.png" alt="Menu" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Start Node
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import React from 'react'
import { useDnD } from './DnDContext'

import { Box, Paper, Typography, Divider, IconButton } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import AccessTimeIcon from '@mui/icons-material/AccessTime'

import CallEndIcon from '@mui/icons-material/CallEnd'

import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
// Add more MUI icons as needed

export default function Sidebar() {
  const [_, setType] = useDnD()

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType(nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <Box
      component='aside'
      sx={{
        width: 260,
        height: '100vh',
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        borderRight: '1px solid #333',
        position: 'fixed',
        left: 0,
        top: 0,
        color: '#fff'
      }}
    >
      {/* Sidebar Header */}
      <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
        IVR Nodes
      </Typography>
      <Typography variant='body2' gutterBottom color='textSecondary' sx={{ color: '#ccc' }}>
        Drag these elements to the flow editor
      </Typography>

      <Divider sx={{ margin: '20px 0', borderColor: '#444' }} />

      {/* Draggable Nodes */}
      <Box sx={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr' }}>
        {/* Example Node: Menu */}
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#3f51b5',
            color: '#fff',
            cursor: 'grab',
            '&:hover': {
              backgroundColor: '#303f9f'
            }
          }}
          draggable
          onDragStart={event => onDragStart(event, 'MenuNode')}
        >
          <MenuIcon sx={{ fontSize: '32px' }} />
          <Typography variant='body2' sx={{ marginTop: '5px' }}>
            Menu
          </Typography>
        </Paper>

        {/* Example Node: Time */}
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#8e24aa',
            color: '#fff',
            cursor: 'grab',
            '&:hover': {
              backgroundColor: '#7b1fa2'
            }
          }}
          draggable
          onDragStart={event => onDragStart(event, 'TimeNode')}
        >
          <AccessTimeIcon sx={{ fontSize: '32px' }} />
          <Typography variant='body2' sx={{ marginTop: '5px' }}>
            Time
          </Typography>
        </Paper>

        {/* Example Node: Hangup */}
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#e53935',
            color: '#fff',
            cursor: 'grab',
            '&:hover': {
              backgroundColor: '#d32f2f'
            }
          }}
          draggable
          onDragStart={event => onDragStart(event, 'HangupNode')}
        >
          <CallEndIcon sx={{ fontSize: '32px' }} />
          <Typography variant='body2' sx={{ marginTop: '5px' }}>
            Hangup
          </Typography>
        </Paper>

        {/* Example Node: API Configuration */}
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#00acc1',
            color: '#fff',
            cursor: 'grab',
            '&:hover': {
              backgroundColor: '#00838f'
            }
          }}
          draggable
          onDragStart={event => onDragStart(event, 'ApiNode')}
        >
          <SettingsEthernetIcon sx={{ fontSize: '32px' }} />
          <Typography variant='body2' sx={{ marginTop: '5px' }}>
            API Config
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}
