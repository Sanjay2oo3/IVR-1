// components/CustomDrawer.tsx
'use client'

import React from 'react'
import { Drawer, Box, IconButton, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface CustomDrawerProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export default function CustomDrawer({ open, onClose, title, children }: CustomDrawerProps) {
  return (
    <>
      <Drawer anchor='right' open={open} onClose={onClose}>
        <Box sx={{ width: 350, p: 3, position: 'relative' }}>
          {/* Close Button */}
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={onClose}>
            <CloseIcon />
          </IconButton>

          {/* Drawer Title */}
          {title && (
            <Typography variant='h4' sx={{ mb: 2 }}>
              {title}
            </Typography>
          )}

          {/* Drawer Content (Children) */}
          <Box sx={{ mt: 4 }}>{children}</Box>
        </Box>
      </Drawer>
    </>
  )
}
