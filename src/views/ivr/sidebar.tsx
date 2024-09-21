import React, { useState } from 'react';
import { useDnD } from './DnDContext';
import { Box, Paper, Typography, Divider, TextField, MenuItem, Select, FormControl, InputLabel, Tooltip, Button } from '@mui/material';
import { useIvrContext } from './IvrContext'; // Import the custom hook for the context

export default function Sidebar() {
  const [_, setType] = useDnD();
  const [ivrName, setIvrName] = useState('');
  const [ivrNumber, setIvrNumber] = useState('');
  const [language, setLanguage] = useState('');
  const [branch, setBranch] = useState('');

  // Accessing context values
  const { dispatch } = useIvrContext();

  const handleSave = () => {
    // Dispatching actions to the context to update global state
    dispatch({ type: 'IvrName', payload: { IvrName: ivrName } });
    dispatch({ type: 'IvrUniqueNumber', payload: { IvrUniqueNumber: ivrNumber } });
    dispatch({ type: 'Language', payload: { Language: language } });
    dispatch({ type: 'BranchName', payload: { BranchName: branch } });

    console.log('Form data saved to context!');
  };

  const onDragStart = (event, nodeType: string) => {
    setType(nodeType); // Set the dragged type
    event.dataTransfer.effectAllowed = 'move';
  };

  const { IvrData } = useIvrContext();
  console.log("ivrdata:------",IvrData);


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

      <form>
        {/* IVR Name Field */}
        <TextField
          label="IVR Name"
          variant="outlined"
          className="mb-4"
          fullWidth
          value={ivrName}
          onChange={(e) => setIvrName(e.target.value)}
        />

        {/* IVR Unique Number Field */}
        <TextField
          label="IVR Unique No."
          variant="outlined"
          className="mb-4"
          fullWidth
          value={ivrNumber}
          onChange={(e) => setIvrNumber(e.target.value)}
        />

        {/* Language Dropdown */}
        <FormControl variant="outlined" className="mb-4" fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
          </Select>
        </FormControl>

        {/* Branch Name Dropdown */}
        <FormControl variant="outlined" className="mb-4" fullWidth>
          <InputLabel>Branch Name</InputLabel>
          <Select
            label="Branch Name"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <MenuItem value="branch1">Branch 1</MenuItem>
            <MenuItem value="branch2">Branch 2</MenuItem>
            <MenuItem value="branch3">Branch 3</MenuItem>
          </Select>
        </FormControl>

        {/* Save and Exit Buttons */}
        <Box display="flex" justifyContent="space-between" className="mb-6">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
          >
            Exit
          </Button>
        </Box>
      </form>

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
        <Box className="flex flex-col items-center">
          <Tooltip title="Case When">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'CaseWhenNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/case_when.png" alt="Case When" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="TTS">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'TtsNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/tts.png" alt="TTS" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Langauge Menu">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'LangaugeNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/language_menu.png" alt="Language Node" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Call Back">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'CallbackNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/callback.png" alt="User Input" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Session Variable">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'SessionVariableNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/session_variable.png" alt="Session Variable" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>
        <Box className="flex flex-col items-center">
          <Tooltip title="Lua">
            <Paper
              className="cursor-grab rounded-lg shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              draggable
              onDragStart={(event) => onDragStart(event, 'LuaNode')} // Set UserInputNode type for dragging
            >
              <img src="/images/custom/lua_file.png" alt="Lua" className="w-12 h-12" />
            </Paper>
          </Tooltip>
        </Box>

      </Box>
    </Box>
  );
}
