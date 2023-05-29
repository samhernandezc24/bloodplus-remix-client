import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Rating,
} from '@mui/material'
import {Phone, LocationOn} from '@mui/icons-material'

const DonorDetails = ({donor, selected}: any) => {
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {donor.first_name} {donor.last_name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating
            name="half-rating-read"
            defaultValue={Number(donor.average_rating)}
            precision={0.5}
            readOnly
          />
          <Typography component="legend">
            {donor.num_reviews} review{donor.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Tipo de Sangre:</Typography>
          <Typography gutterBottom variant="subtitle1">
            {donor.blood_type}
          </Typography>
        </Box>
        {donor.age && (
          <Typography variant="body2" color="textSecondary" marginBottom={2}>
            Edad: {donor.age}
          </Typography>
        )}
        {donor.address && (
          <Typography gutterBottom variant="body2" color="textSecondary">
            <LocationOn />
            {donor.address}
          </Typography>
        )}
        {donor.phone && (
          <Typography variant="body2" color="textSecondary">
            <Phone /> {donor.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(donor.request_uri, '_blank')}
        >
          Enviar Solicitud
        </Button>
      </CardActions>
    </Card>
  )
}

export default DonorDetails
