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

//       {/* Draggable Nodes in a Grid */}
//       <Box className="grid grid-cols-3 gap-4">
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'TimeNode')} // Set TimeNode type for dragging
//           >
//             <img src="/images/custom/time_condition.png" alt="Time" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Time
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'HangupNode')} // Set HangupNode type for dragging
//           >
//             <img src="/images/custom/call_hangup.png" alt="Hang Up" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Hang Up
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'MenuNode')} // Set MenuNode type for dragging
//           >
//             <img src="/nodeimages/menu.png" alt="Menu" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Menu
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'QueueNode')} // Set QueueNode type for dragging
//           >
//             <img src="/images/custom/Queue.png" alt="Queue" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Queue
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'PlayMessageNode')} // Set PlayMessageNode type for dragging
//           >
//             <img src="/images/custom/play_audio.png" alt="Play Message" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             Play Message
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'ApiNode')} // Set ApiNode type for dragging
//           >
//             <img src="/images/custom/api_configuration.png" alt="API" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             API
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'IvrNode')} // Set IvrNode type for dragging
//           >
//             <img src="/images/custom/ivr_list.png" alt="IVR" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             IVR
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'UserFeedbackNode')} // Set UserFeedbackNode type for dragging
//           >
//             <img src="/images/custom/user_voice_feedback.png" alt="User Feedback" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             User Feedback
//           </Typography>
//         </Box>
//         <Box className="flex flex-col items-center">
//           <Paper
//             className="cursor-grab rounded-lg shadow-md"
//             draggable
//             onDragStart={(event) => onDragStart(event, 'UserInputNode')} // Set UserInputNode type for dragging
//           >
//             <img src="/images/custom/user_input.png" alt="User Input" className="w-12 h-12" />
//           </Paper>
//           <Typography variant="body2" className="mt-2">
//             User Input
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
import React from 'react';
import { useDnD } from './DnDContext';
import { Box, Paper, Typography, Divider, TextField, MenuItem, Select, FormControl, InputLabel, Tooltip, Button } from '@mui/material';

export default function Sidebar() {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType: string) => {
    setType(nodeType); // Set the dragged type
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box
      component="aside"
      className="w-96 h-screen bg-white flex flex-col p-6 shadow-lg border-r border-gray-300 fixed left-0 top-0"
    >
      {/* Sidebar Header */}
      <Typography variant="h5" className="text-blue-600 mb-4">
        IVR Design
      </Typography>

      <Divider className="mb-6" />

      {/* IVR Name Field */}
      <TextField
        label="IVR Name"
        variant="outlined"
        className="mb-4"
        fullWidth
      />

      {/* IVR Unique Number Field */}
      <TextField
        label="IVR Unique No."
        variant="outlined"
        className="mb-4"
        fullWidth
      />

      {/* Language Dropdown */}
      <FormControl variant="outlined" className="mb-4" fullWidth>
        <InputLabel>Language</InputLabel>
        <Select label="Language">
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </FormControl>

      {/* Branch Name Dropdown */}
      <FormControl variant="outlined" className="mb-4" fullWidth>
        <InputLabel>Branch Name</InputLabel>
        <Select label="Branch Name">
          <MenuItem value="branch1">Branch 1</MenuItem>
          <MenuItem value="branch2">Branch 2</MenuItem>
          <MenuItem value="branch3">Branch 3</MenuItem>
        </Select>
      </FormControl>

      {/* Save and Exit Buttons */}
      <Box className="flex justify-between mb-6">
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="secondary">
          Exit
        </Button>
      </Box>

      <Divider className="mb-6" />

      <Typography variant="body2" color="textSecondary" className="mb-4">
        Drag & Drop Nodes
      </Typography>

      {/* Draggable Nodes in a Grid */}
      <Box className="grid grid-cols-3 gap-6">
        <Box className="flex flex-col items-center">
          <Tooltip title="Time">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'TimeNode')} // Set TimeNode type for dragging
            >
              <img src="/images/custom/time_condition.png" alt="Time" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Hang Up">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'HangupNode')} // Set HangupNode type for dragging
            >
              <img src="/images/custom/call_hangup.png" alt="Hang Up" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Menu">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'MenuNode')} // Set MenuNode type for dragging
            >
              <img src="/nodeimages/menu.png" alt="Menu" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Queue">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'QueueNode')} // Set QueueNode type for dragging
            >
              <img src="/images/custom/Queue.png" alt="Queue" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Play Message">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'PlayMessageNode')} // Set PlayMessageNode type for dragging
            >
              <img src="/images/custom/play_audio.png" alt="Play Message" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="API">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'ApiNode')} // Set ApiNode type for dragging
            >
              <img src="/images/custom/api_configuration.png" alt="API" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="IVR">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'IvrNode')} // Set IvrNode type for dragging
            >
              <img src="/images/custom/ivr_list.png" alt="IVR" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="User Feedback">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'UserFeedbackNode')} // Set UserFeedbackNode type for dragging
            >
              <img src="/images/custom/user_voice_feedback.png" alt="User Feedback" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="User Input">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'UserInputNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/user_input.png" alt="User Input" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
