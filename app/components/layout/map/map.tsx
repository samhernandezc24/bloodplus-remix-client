import GoogleMapReact from 'google-map-react'

export default function Map() {
  const coordinates = {lat: 10.99835602, lng: 77.01502627}
  return (
    <div className="max-w-4xl">
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB084MqtWFhO-J36dv8dMzdN_xLhpF-pDI'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        onChange={() => console.log('change')}
        onChildClick={() => console.log('click child')}
      ></GoogleMapReact>
    </div>
  )
}
