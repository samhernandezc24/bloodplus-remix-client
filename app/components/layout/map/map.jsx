import GoogleMapReact from 'google-map-react'
import {LocationOnOutlined} from '@mui/icons-material'

export function Map({coords, donors, setCoords, setBounds, setChildClicked}) {
  return (
    // Importante Ajuste siempre explícitamente la altura del contenedor
    <div className="w-full" style={{height: '90vh'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB084MqtWFhO-J36dv8dMzdN_xLhpF-pDI'}}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true}}
        onChange={e => {
          setCoords({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={child => setChildClicked(child)}
      >
        {donors.length > 0 &&
          donors.map((donor, i) => (
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 hover:z-20"
              lat={Number(donor.latitude)}
              lng={Number(donor.longitude)}
              key={i}
            >
              <LocationOnOutlined color="secondary" fontSize="large" />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  )
}
