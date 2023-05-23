import Map from '~/components/layout/map/map'
import {CssBaseline, Grid} from '@mui/material'
import List from '~/components/layout/list/list'

export default function SolicitantesIndexRoute() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={0}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}
