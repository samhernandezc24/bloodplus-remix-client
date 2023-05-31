import React from 'react'
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

interface DonorDetailsProps {
  donor: any
  selected: boolean
  refProp?: React.RefObject<HTMLDivElement>
}

const DonorDetails = ({donor, selected, refProp}: DonorDetailsProps) => {
  if (selected)
    refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})

  const calculateAge = (dateOfBirth: string): number => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }
    return age
  }

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
            {donor.total_donations} donado{donor.total_donations > 1 && 's'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Tipo de Sangre:</Typography>
          <Typography gutterBottom variant="subtitle1">
            {donor.blood.blood_type}
          </Typography>
        </Box>
        {donor.date_of_birth && (
          <Typography variant="body2" color="textSecondary" marginBottom={2}>
            Edad: {calculateAge(donor.date_of_birth)} años
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
          color="secondary"
          onClick={() => window.open('/solicitantes/solicitudes', '_blank')}
        >
          Enviar Solicitud
        </Button>
      </CardActions>
    </Card>
  )
}

export default DonorDetails
