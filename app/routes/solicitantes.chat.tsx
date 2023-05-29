import {Send} from '@mui/icons-material'
import {
  Grid,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Fab,
} from '@mui/material'

export default function SolicitantesChatRoute() {
  return (
    <div className="px-0 lg:px-4">
      <Grid item xs={9}>
        <List
          style={{
            height: '80vh',
            overflowY: 'auto',
            backgroundColor: '#99a1b333',
          }}
        >
          <ListItem key="1">
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  primary="Hey, que tal?"
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  secondary="Enviado a las 09:30 a.m."
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="2">
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align="left"
                  primary="Hey, que tal, yo estoy bien...y tú?"
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align="left"
                  secondary="Enviado a las 09:33 a.m."
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
        <Grid container style={{padding: '20px'}}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Escribe un mensaje aquí"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={1} align="right">
            <Fab color="secondary" aria-label="enviar">
              <Send />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
