// components/QueueFormDrawer.tsx
'use client'

import { useState } from 'react'
import { Button, FormControl, FormLabel, TextField, Select, MenuItem, Divider, Snackbar, Alert } from '@mui/material'
import CustomDrawer from '../CustomDrawer'

export default function QueueForm({ onOpen }: { onOpen: () => void }) {
  const [queueName, setQueueName] = useState('')
  const [selectedQueue, setSelectedQueue] = useState('')
  const [error, setError] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (queueName.length < 1 || queueName.length > 100) {
      setError(true)
    } else {
      console.log('Queue Form Submitted:', queueName, selectedQueue)
      onOpen() // Close the form and reset
      setSnackOpen(true)
      setQueueName('')
      setSelectedQueue('')
      setError(false)
    }
  }

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  return (
    <div>
      <CustomDrawer open={true} onClose={onOpen} title='Queue Properties'>
        <form onSubmit={handleSubmit}>
          <Divider sx={{ mb: 3 }} />

          {/* Queue Name Input */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }} error={error}>
            <FormLabel>Queue Name</FormLabel>
            <TextField
              fullWidth
              label='Enter Queue Name'
              variant='outlined'
              required
              value={queueName}
              onChange={e => setQueueName(e.target.value)}
              inputProps={{ min: 1, max: 100 }}
            />
            {error && <span style={{ color: 'red' }}>Queue name must be between 1 and 100 characters.</span>}
          </FormControl>

          {/* Dropdown List */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
            <FormLabel>Select Queue Option</FormLabel>
            <Select value={selectedQueue} onChange={e => setSelectedQueue(e.target.value)} displayEmpty required>
              <MenuItem value='' disabled>
                Select an option
              </MenuItem>
              <MenuItem value='queueOption1'>Queue Option 1</MenuItem>
              <MenuItem value='queueOption2'>Queue Option 2</MenuItem>
              <MenuItem value='queueOption3'>Queue Option 3</MenuItem>
            </Select>
          </FormControl>

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

        {/* Snackbar for success message */}
        <Snackbar
          open={snackOpen}
          autoHideDuration={3000}
          onClose={handleSnackClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleSnackClose} severity='success' sx={{ width: '100%' }}>
            Queue form submitted successfully!
          </Alert>
        </Snackbar>
      </CustomDrawer>
    </div>
  )
}