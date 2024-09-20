// components/MenuFormDrawer.tsx
'use client'

import { useState } from 'react'
import { Button, FormControl, FormLabel, TextField, Divider, Snackbar, Alert } from '@mui/material'
import CustomDrawer from '../CustomDrawer'

export default function TimeForm() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)

  // Toggle the drawer open/close state
  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validation for the name input
    if (name.length < 1 || name.length > 100) {
      setError(true)
    } else {
      console.log('Form Submitted:', name)
      toggleDrawer(false) // Close the drawer after submission
      setSnackOpen(true) // Show success snackbar
      setName('') // Reset the name input
      setError(false) // Reset error state
    }
  }

  // Handle Snackbar close
  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  return (
    <div>
      {/* Button to open the drawer */}
      <Button variant='contained' color='primary' onClick={() => toggleDrawer(true)}>
        Time Form
      </Button>

      {/* Custom Drawer Component */}
      <CustomDrawer open={open} onClose={() => toggleDrawer(false)} title='Properties'>
        <form onSubmit={handleSubmit}>
          <Divider sx={{ mb: 3 }} />
          {/* Ivr Menu Name Input */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }} error={error}>
            <FormLabel>Name</FormLabel>
            <TextField
              fullWidth
              label='Enter Name'
              variant='outlined'
              required
              value={name}
              onChange={e => setName(e.target.value)}
              inputProps={{ min: 1, max: 100 }} // Add min and max validation
            />
            {error && <span style={{ color: 'red' }}>Name must be between 1 and 100 characters.</span>}
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
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning at the top right
      >
        <Alert onClose={handleSnackClose} severity='success' sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}
