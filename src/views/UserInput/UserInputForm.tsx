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
  Divider
} from '@mui/material'
import CustomDrawer from '../CustomDrawer'
import React from 'react'

interface UserInputFormProps {
  open: boolean
  onClose: () => void
  nodeId: string
}

export default function UserInputForm({ open, onClose, nodeId }: UserInputFormProps) {
  const [formValues, setFormValues] = useState({
    ivrName: '',
    greetLong: 'none',
    timeout: '',
    maxAttempt: '',
    visitLimit: '',
    invalidSound: 'none',
    timeoutSound: 'none',
    inputLimitSound: 'none',
    userInput: '',
    minInputLength: '',
    maxInputLength: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data:', formValues)
    onClose() // Close the drawer after submission
  }

  return (
    <CustomDrawer open={open} onClose={onClose} title='User Input Form'>
      <form onSubmit={handleSubmit}>
        <Divider sx={{ mb: 3 }} />

        {/* Ivr Menu Name Input */}
        <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
          <FormLabel>Ivr Menu Name</FormLabel>
          <TextField
            fullWidth
            label='Enter Name'
            variant='outlined'
            required
            name='ivrName'
            value={formValues.ivrName}
            onChange={handleChange}
          />
        </FormControl>

        {/* Greet Long Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2 }}>
          <FormLabel>Greet Long</FormLabel>
          <RadioGroup name='greetLong' value={formValues.greetLong} onChange={handleChange}>
            <FormControlLabel value='none' control={<Radio />} label='None' />
            <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
          </RadioGroup>
        </FormControl>

        {/* Timeout, Max Attempt, and Visit Limit Fields */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Timeout (ms)</FormLabel>
              <TextField
                fullWidth
                label='Enter Timeout'
                variant='outlined'
                required
                name='timeout'
                value={formValues.timeout}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Max. Attempt</FormLabel>
              <TextField
                fullWidth
                label='Enter Attempts'
                variant='outlined'
                required
                name='maxAttempt'
                value={formValues.maxAttempt}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>VISIT Limit</FormLabel>
              <TextField
                fullWidth
                label='Enter Limit'
                variant='outlined'
                required
                name='visitLimit'
                value={formValues.visitLimit}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* Invalid Sound Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
          <FormLabel>Invalid Sound</FormLabel>
          <RadioGroup name='invalidSound' value={formValues.invalidSound} onChange={handleChange}>
            <FormControlLabel value='none' control={<Radio />} label='None' />
            <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
          </RadioGroup>
        </FormControl>

        {/* Timeout Sound Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
          <FormLabel>Timeout Sound</FormLabel>
          <RadioGroup name='timeoutSound' value={formValues.timeoutSound} onChange={handleChange}>
            <FormControlLabel value='none' control={<Radio />} label='None' />
            <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
          </RadioGroup>
        </FormControl>

        {/* Input Limit Reached Sound Radio Group */}
        <FormControl component='fieldset'>
          <FormLabel>Input Limit Reached Sound</FormLabel>
          <RadioGroup name='inputLimitSound' value={formValues.inputLimitSound} onChange={handleChange}>
            <FormControlLabel value='none' control={<Radio />} label='None' />
            <FormControlLabel value='existing' control={<Radio />} label='Choose Existing' />
          </RadioGroup>
        </FormControl>

        {/* User Input, Min Input Length, and Max Input Length */}
        <FormControl fullWidth variant='outlined' sx={{ mt: 4 }}>
          <FormLabel>User Input</FormLabel>
          <TextField
            fullWidth
            label='Enter User Input'
            variant='outlined'
            required
            name='userInput'
            value={formValues.userInput}
            onChange={handleChange}
          />
        </FormControl>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Min Input Length</FormLabel>
              <TextField
                fullWidth
                label='Enter Min Length'
                variant='outlined'
                required
                name='minInputLength'
                value={formValues.minInputLength}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Max Input Length</FormLabel>
              <TextField
                fullWidth
                label='Enter Max Length'
                variant='outlined'
                required
                name='maxInputLength'
                value={formValues.maxInputLength}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>

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
  )
}
