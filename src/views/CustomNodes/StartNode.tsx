'use client';

import { useCallback, useState } from 'react';

import { Handle, Position } from '@xyflow/react';

import Dropdown from '@/views/Nodes/DropDownMenu'; // Import the Dropdown component

const handleStyle = { left: 10 };

export default function StartNode({ data }: any) {
  const [anchorPosition, setAnchorPosition] = useState<{ top: number; left: number } | null>(null);

  const onChange = useCallback((evt: any) => {

    console.log(evt.target.value);
  }, []);

  // Function to toggle the dropdown on right click
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default right-click menu
    setAnchorPosition(anchorPosition ? null : { top: e.clientY, left: e.clientX });
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  // Dropdown options array
  const dropdownOptions = [
    { icon: "/images/custom/time_condition.png", name: "Time" },
    { icon: "/images/custom/call_hangup.png", name: "Hangup" },
    { icon: "/images/custom/get_input.png", name: "Menu" },
    { icon: "/images/custom/Queue.png", name: "Queue" },
    { icon: "/images/custom/play_audio.png", name: "Play Message" },
    { icon: "/images/custom/api_configuration.png", name: "Api Configuration" },
    { icon: "/images/custom/ivr_list.png", name: "IVR" },
    { icon: "/images/custom/user_voice_feedback.png", name: "UserVoice Feedback" },
    { icon: "/images/custom/case_when.png", name: "Case When" },
    { icon: "/images/custom/user_input.png", name: "User Input" },
    { icon: "/images/custom/tts.png", name: "TTS" },
    { icon: "/images/custom/language_menu.png", name: "Language Menu" },
    { icon: "/images/custom/callback.png", name: "Callback" },
    { icon: "/images/custom/lua_file.png", name: "LUA" },
    { icon: "/images/custom/session_variable.png", name: "Session" }
  ];

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="relative" onContextMenu={handleRightClick}>
        <img src="/nodeimages/start.png" alt="Start" />
        {/* Render Dropdown only when it's open */}
        <Dropdown options={dropdownOptions} anchorPosition={anchorPosition} handleClose={handleClose} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
