'use client'

import { useState } from 'react'
import { Button, FormControl, FormLabel, MenuItem, Select, Grid, Divider } from '@mui/material'
import CustomDrawer from '../CustomDrawer'
import React from 'react'
import { useIvrContext } from '../ivr/IvrContext'

interface LanguageMenuFormProps {
  open: boolean
  onClose: () => void
  nodeId: string
}

export default function LanguageMenuForm({ open, onClose, nodeId }: LanguageMenuFormProps) {
  const { dispatch } = useIvrContext()
  const [formValues, setFormValues] = useState({
    ivrName: '',
    greetLong: 'none',
    timeout: '',
    maxAttempt: '',
    visitLimit: '',
    invalidSound: 'none',
    timeoutSound: 'none',
    inputLimitSound: 'none',
    language1: '',
    language2: '',
    language3: '',
    language4: '',
    language5: '',
    language6: '',
    language7: '',
    language8: '',
    language9: '',
    language10: ''
  })

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({
        type: 'setIvrData',
        payload: {
          nodeId:nodeId,
          formValues
        },
      })
    onClose() // Close the drawer after submission
  }

  return (
    <CustomDrawer open={open} onClose={onClose} title='Language Menu Form'>
      <form onSubmit={handleSubmit}>
        <Divider sx={{ mb: 3 }} />

        {/* Ivr Menu Name Input */}
        <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
          <FormLabel>Ivr Menu Name</FormLabel>
          <Select
            fullWidth
            label='Enter Name'
            required
            name='ivrName'
            value={formValues.ivrName}
            onChange={handleChange}
          >
            <MenuItem value='none'>None</MenuItem>
            <MenuItem value='existing'>Choose Existing</MenuItem>
          </Select>
        </FormControl>

        {/* Greet Long Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2 }}>
          <FormLabel>Greet Long</FormLabel>
          <Select name='greetLong' value={formValues.greetLong} onChange={handleChange}>
            <MenuItem value='none'>None</MenuItem>
            <MenuItem value='existing'>Choose Existing</MenuItem>
          </Select>
        </FormControl>

        {/* Timeout, Max Attempt, and Visit Limit Fields */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Timeout (ms)</FormLabel>
              <Select fullWidth required name='timeout' value={formValues.timeout} onChange={handleChange}>
                <MenuItem value='1000'>1000</MenuItem>
                <MenuItem value='2000'>2000</MenuItem>
                {/* Add more options */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>Max. Attempt</FormLabel>
              <Select fullWidth required name='maxAttempt' value={formValues.maxAttempt} onChange={handleChange}>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                {/* Add more options */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant='outlined'>
              <FormLabel>VISIT Limit</FormLabel>
              <Select fullWidth required name='visitLimit' value={formValues.visitLimit} onChange={handleChange}>
                <MenuItem value='5'>5</MenuItem>
                <MenuItem value='10'>10</MenuItem>
                {/* Add more options */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Invalid Sound Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
          <FormLabel>Invalid Sound</FormLabel>
          <Select name='invalidSound' value={formValues.invalidSound} onChange={handleChange}>
            <MenuItem value='none'>None</MenuItem>
            <MenuItem value='existing'>Choose Existing</MenuItem>
          </Select>
        </FormControl>

        {/* Timeout Sound Radio Group */}
        <FormControl component='fieldset' sx={{ mb: 2, mt: 4 }}>
          <FormLabel>Timeout Sound</FormLabel>
          <Select name='timeoutSound' value={formValues.timeoutSound} onChange={handleChange}>
            <MenuItem value='none'>None</MenuItem>
            <MenuItem value='existing'>Choose Existing</MenuItem>
          </Select>
        </FormControl>

        {/* Input Limit Reached Sound Radio Group */}
        <FormControl component='fieldset'>
          <FormLabel>Input Limit Reached Sound</FormLabel>
          <Select name='inputLimitSound' value={formValues.inputLimitSound} onChange={handleChange}>
            <MenuItem value='none'>None</MenuItem>
            <MenuItem value='existing'>Choose Existing</MenuItem>
          </Select>
        </FormControl>

        {/* Language Selection (Dropdowns) */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {[...Array(10)].map((_, index) => (
            <Grid item xs={6} key={index}>
              <FormControl fullWidth variant='outlined'>
                <FormLabel>Language {index + 1}</FormLabel>
                <Select
                  fullWidth
                  required
                  name={`language${index + 1}`}
                  value={formValues[`language${index + 1}` as keyof typeof formValues]}
                  onChange={handleChange}
                >
                  <MenuItem value='english'>English</MenuItem>
                  <MenuItem value='spanish'>Spanish</MenuItem>
                  {/* Add more language options */}
                </Select>
              </FormControl>
            </Grid>
          ))}
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
