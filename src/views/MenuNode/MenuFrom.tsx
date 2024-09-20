'use client'

import { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Divider,
  Snackbar,
  Alert
} from '@mui/material'

import CustomDrawer from '../CustomDrawer'

// Modify the props to control the drawer from the parent component
export default function MenuForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [snackOpen, setSnackOpen] = useState(false)

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Submitted')
    setSnackOpen(true) // Open the Snackbar on form submission
    onClose() // Close the drawer after submission
  }

  // Handle Snackbar close
  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  return (
    <>
      {/* Custom Drawer Component */}
      <CustomDrawer open={open} onClose={onClose} title='Properties'>
        <form onSubmit={handleSubmit}>
          <Divider sx={{ mb: 3 }} />
          {/* Ivr Menu Name Input */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
            <FormLabel>Ivr Menu Name</FormLabel>
            <TextField fullWidth label='Enter Name' variant='outlined' required />
          </FormControl>

          {/* Greet Long Radio Group */}
          <FormControl component='fieldset' sx={{ mb: 2 }}>
            <FormLabel>Greet Long</FormLabel>
            <RadioGroup name='greet-long' defaultValue='none'>
              <FormControlLabel value='none' control={<Radio />} label='None' />
              <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
            </RadioGroup>
          </FormControl>

          {/* Timeout, Max Attempt, and Visit Limit Fields */}
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

          {/* Invalid Sound Radio Group */}
          <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
            <FormLabel>Invalid Sound</FormLabel>
            <RadioGroup name='invalid-sound' defaultValue='none'>
              <FormControlLabel value='none' control={<Radio />} label='None' />
              <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
            </RadioGroup>
          </FormControl>

          {/* Timeout Sound Radio Group */}
          <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
            <FormLabel>Timeout Sound</FormLabel>
            <RadioGroup name='timeout-sound' defaultValue='none'>
              <FormControlLabel value='none' control={<Radio />} label='None' />
              <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
            </RadioGroup>
          </FormControl>

          {/* Input Limit Reached Sound Radio Group */}
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
        </form>
      </CustomDrawer>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackClose} severity='success' sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  )
}
