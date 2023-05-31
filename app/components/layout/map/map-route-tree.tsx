import {Fragment, RefObject, createRef, useEffect, useState} from 'react'
import cn from 'classnames'
import {Grid, InputLabel, FormControl, MenuItem, Select} from '@mui/material'
import DonorDetails from '~/components/donor-details'

interface MapRouteTreeProps {
  donors: any[]
  type: string
  setType: (type: string) => void
  rating: string
  setRating: (rating: string) => void
  childClicked: number | null
  isLoading?: boolean
}

export function MapRouteTree({
  donors,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}: MapRouteTreeProps) {
  const [elRefs, setElRefs] = useState<Array<RefObject<HTMLDivElement>>>([])

  useEffect(() => {
    setElRefs(refs =>
      Array(donors.length)
        .fill(null)
        .map((_, i) => refs[i] || createRef<HTMLDivElement>())
    )
  }, [donors])

  return (
    <ul>
      <Fragment key={`custom-separator`}>
        <h3 className={cn('mb-1 ml-5 text-xl font-bold text-tertiary', 'mt-2')}>
          Donadores cercanos a ti
        </h3>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <div className="p-2 pr-2">
            <FormControl sx={{m: 1, minWidth: 120}} size="small">
              <InputLabel id="type">Tipo de Sangre</InputLabel>
              <Select
                id="type"
                className="input-select"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <MenuItem value="1">A+</MenuItem>
                <MenuItem value="2">A-</MenuItem>
                <MenuItem value="3">B+</MenuItem>
                <MenuItem value="4">B-</MenuItem>
                <MenuItem value="5">AB+</MenuItem>
                <MenuItem value="6">AB-</MenuItem>
                <MenuItem value="7">O+</MenuItem>
                <MenuItem value="8">O-</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}} size="small">
              <InputLabel id="rating">Calificación</InputLabel>
              <Select
                id="rating"
                className="input-select"
                value={rating}
                onChange={e => setRating(e.target.value)}
              >
                <MenuItem value="">Todo</MenuItem>
                <MenuItem value="3">Más de 3.0</MenuItem>
                <MenuItem value="4">Más de 4.0</MenuItem>
                <MenuItem value="4.5">Más de 4.5</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3}>
              {donors?.map((donor, i) => (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <DonorDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    donor={donor}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Fragment>
    </ul>
  )
}
