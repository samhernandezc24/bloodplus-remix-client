import GoogleMapReact from 'google-map-react'

export default function SolicitantesIndexRoute() {
  const defaultProps = {
    center: {
      lat: 18.023183714063215,
      lng: -92.90362957485125,
    },
    zoom: 14,
  }

  return (
    <div className="px-0 lg:px-4">
      {/** Importante Ajuste siempre explícitamente la altura del contenedor */}
      <div className="w-full" style={{height: '90vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyB084MqtWFhO-J36dv8dMzdN_xLhpF-pDI'}}
          defaultCenter={defaultProps.center}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={() => console.log('change...')}
          onChildClick={() => console.log('child click...')}
        ></GoogleMapReact>
      </div>
    </div>
  )
}
