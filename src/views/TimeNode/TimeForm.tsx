'use client'

import { useState } from 'react'
import { Button, FormControl, FormLabel, TextField, Divider, Snackbar, Alert } from '@mui/material'
import CustomDrawer from '../CustomDrawer'

export default function TimeForm({ open, onClose, nodeId }: { open: boolean; onClose: () => void; nodeId: string }) {
  const [formValues, setFormValues] = useState({
    name: ''
  })
  const [error, setError] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false) // Snackbar state

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formValues.name.length < 1 || formValues.name.length > 100) {
      setError(true)
      return
    }

    onClose() // Close the form after submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div>
      <CustomDrawer open={open} onClose={onClose} title='Properties'>
        <form onSubmit={handleSubmit}>
          <Divider sx={{ mb: 3 }} />
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }} error={error}>
            <FormLabel>Name</FormLabel>
            <TextField
              fullWidth
              label='Enter Name'
              name='name'
              variant='outlined'
              required
              value={formValues.name}
              onChange={handleChange}
              inputProps={{ minLength: 1, maxLength: 100 }} // Add min and max validation
            />
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
      </CustomDrawer>
    </div>
  )
}
