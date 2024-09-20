'use client';

import React from 'react';
import { Menu, MenuItem } from '@mui/material';

interface DropdownProps {
  options: { icon: string; name: string }[];
  anchorPosition: { top: number; left: number } | null;
  handleClose: () => void;
}

export default function Dropdown({ options, anchorPosition, handleClose }: DropdownProps) {
  return (
    <Menu
      id="simple-menu"
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition ? { top: anchorPosition.top, left: anchorPosition.left } : undefined}
      keepMounted
      open={Boolean(anchorPosition)}
      onClose={handleClose}
    >
      {options.map((option, index) => (
        <MenuItem key={index} onClick={handleClose}>
          <img src={option.icon} alt={option.name} style={{ width: 20, height: 20, marginRight: 8 }} />
          <span>{option.name}</span>
        </MenuItem>
      ))}
    </Menu>
  );
}
