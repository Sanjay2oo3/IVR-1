
'use client'

import  { useState } from 'react'

import {
  Box,
  Button,
  Drawer,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  FormControl,
  FormLabel,
  Typography,
  IconButton,
  Divider,
  Grid
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function MenuFormDrawer() {
  const [open, setOpen] = useState(false)

  // Toggle the drawer open/close state
  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Submitted')
    toggleDrawer(false) // Close the drawer after submission
  }

  return (
    <div>
      {/* Button to open the drawer */}
      <Button variant='contained' color='primary' onClick={() => toggleDrawer(true)}>
        Open Right Drawer
      </Button>

      {/* Drawer Component */}
      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 350, p: 3, position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={() => toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>

          {/* Drawer Content */}
          <Typography variant='h4' sx={{ mb: 2 }}>
            Properties
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Form */}
          <Box
            component='form'
            role='presentation'
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            {/* Name Input with Label */}
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Ivr Menu Name</FormLabel>
              <TextField fullWidth label='Enter Name' variant='outlined' required />
            </FormControl>

            {/* Greet Long Radio Group with Label */}
            <FormControl component='fieldset'>
              <FormLabel>Greet Long</FormLabel>
              <RadioGroup name='greet-long' defaultValue='none'>
                <FormControlLabel value='none' control={<Radio />} label='None' />
                <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
              </RadioGroup>
            </FormControl>

            {/* Timeout, Max Attempt, and Visit Limit Fields with Labels */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth variant='outlined'>
                  <FormLabel>Timeout (ms)</FormLabel>
                  <TextField fullWidth label='Enter Timeout' variant='outlined' required />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant='outlined'>
                  <FormLabel>Max. Attempt</FormLabel>
                  <TextField fullWidth label='Enter Attempts' variant='outlined' required />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant='outlined'>
                  <FormLabel>VISIT Limit</FormLabel>
                  <TextField fullWidth label='Enter Limit' variant='outlined' required />
                </FormControl>
              </Grid>
            </Grid>

            {/* Invalid Sound Radio Group with Label */}
            <FormControl component='fieldset'>
              <FormLabel>Invalid Sound</FormLabel>
              <RadioGroup name='invalid-sound' defaultValue='none'>
                <FormControlLabel value='none' control={<Radio />} label='None' />
                <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
              </RadioGroup>
            </FormControl>

            {/* Timeout Sound Radio Group with Label */}
            <FormControl component='fieldset'>
              <FormLabel>Timeout Sound</FormLabel>
              <RadioGroup name='timeout-sound' defaultValue='none'>
                <FormControlLabel value='none' control={<Radio />} label='None' />
                <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
              </RadioGroup>
            </FormControl>

            {/* Input Limit Reached Sound Radio Group with Label */}
            <FormControl component='fieldset'>
              <FormLabel>Input Limit Reached Sound</FormLabel>
              <RadioGroup name='input-limit-sound' defaultValue='none'>
                <FormControlLabel value='none' control={<Radio />} label='None' />
                <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
              </RadioGroup>
            </FormControl>

            {/* Submit Button */}
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#3f51b5',
                '&:hover': { backgroundColor: '#303f9f' }
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}
