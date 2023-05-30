import {Fragment, useState} from 'react'
import cn from 'classnames'
import {Grid, InputLabel, FormControl, MenuItem, Select} from '@mui/material'
import DonorDetails from '~/components/donor-details'

interface MapRouteTreeProps {
  level?: number
}

export function MapRouteTree({level = 0}: MapRouteTreeProps) {
  const [type, setType] = useState('1')
  const [rating, setRating] = useState('')
  const donors = [
    {
      first_name: 'Juan',
      last_name: 'Solano',
      average_rating: 1.5,
      blood_type: 'A+',
      num_reviews: 2,
      phone: '992334243',
      age: 25,
    },
    {
      first_name: 'Marco',
      last_name: 'Perez',
      average_rating: 2.5,
      blood_type: 'A+',
      num_reviews: 3,
      age: 25,
    },
    {
      first_name: 'Pedro',
      last_name: 'Robles',
      average_rating: 3,
      blood_type: 'A+',
      num_reviews: 1,
      age: 25,
    },
  ]

  return (
    <ul>
      <Fragment key={`${level}-separator`}>
        <h3 className={cn('mb-1 ml-5 text-xl font-bold text-tertiary', 'mt-2')}>
          Donadores cercanos a ti
        </h3>
        <div className="p-2 pr-2">
          <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel>Tipo de Sangre</InputLabel>
            <Select
              className="input-select"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value={'1'}>A+</MenuItem>
              <MenuItem value={'2'}>A-</MenuItem>
              <MenuItem value={'3'}>B+</MenuItem>
              <MenuItem value={'4'}>B-</MenuItem>
              <MenuItem value={'5'}>AB+</MenuItem>
              <MenuItem value={'6'}>AB-</MenuItem>
              <MenuItem value={'7'}>O+</MenuItem>
              <MenuItem value={'8'}>O-</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel>Calificación</InputLabel>
            <Select
              className="input-select"
              value={rating}
              onChange={e => setRating(e.target.value)}
            >
              <MenuItem value={0}>Todo</MenuItem>
              <MenuItem value={3}>Más de 3.0</MenuItem>
              <MenuItem value={4}>Más de 4.0</MenuItem>
              <MenuItem value={4.5}>Más de 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3}>
            {donors?.map((donor, index) => (
              <Grid item key={index} xs={12}>
                <DonorDetails donor={donor} />
              </Grid>
            ))} 
          </Grid>
        </div>
      </Fragment>
    </ul>
  )
}
