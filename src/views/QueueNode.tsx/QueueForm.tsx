
'use client'

import { useState } from 'react'
import { Button, FormControl, FormLabel, TextField, Select, MenuItem, Divider } from '@mui/material'
import CustomDrawer from '../CustomDrawer'
import { useIvrContext } from '../ivr/IvrContext';

export default function QueueForm({ open, onClose, nodeId }: { open: boolean; onClose: () => void; nodeId: string }) {
  const { dispatch } = useIvrContext()

  const [formValues, setFormValues] = useState({
    queueName: '',
    selectedQueue: ''
  })

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({
      type: 'setIvrData',
      payload: {
        nodeId:nodeId,
        formValues
      },
    })

    // Close the drawer after submission
    onClose()
  }

  // Handle input change for TextField and Select components
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div>
      <CustomDrawer open={open} onClose={onClose} title='Queue Properties'>
        <form onSubmit={handleSubmit}>
          <Divider sx={{ mb: 3 }} />

          {/* Queue Name Input */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
            <FormLabel>Queue Name</FormLabel>
            <TextField
              fullWidth
              label='Enter Queue Name'
              variant='outlined'
              required
              name='queueName'
              value={formValues.queueName}
              onChange={handleChange}
              inputProps={{ min: 1, max: 100 }}
            />
          </FormControl>

          {/* Dropdown List */}
          <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
            <FormLabel>Select Queue Option</FormLabel>
            <Select name='selectedQueue' value={formValues.selectedQueue} onChange={handleChange} displayEmpty required>
              <MenuItem value='' disabled>
                Select an option
              </MenuItem>
              <MenuItem value='queueOption1'>Queue Option 1</MenuItem>
              <MenuItem value='queueOption2'>Queue Option 2</MenuItem>
              <MenuItem value='queueOption3'>Queue Option 3</MenuItem>
            </Select>
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
    </div>
  )
}
