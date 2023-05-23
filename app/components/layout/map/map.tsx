import GoogleMapReact from 'google-map-react'

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
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
