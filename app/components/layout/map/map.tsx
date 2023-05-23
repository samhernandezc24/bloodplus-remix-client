import GoogleMapReact from 'google-map-react'

export default function Map() {
  const defaultProps = {
    center: {
      lat: 18.023183714063215,
      lng: -92.90362957485125,
    },
    zoom: 12,
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB084MqtWFhO-J36dv8dMzdN_xLhpF-pDI'}}
        defaultCenter={defaultProps.center}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        onChange={() => console.log('change')}
        onChildClick={() => console.log('click child')}
      ></GoogleMapReact>
    </div>
  )
}
