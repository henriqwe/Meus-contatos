import { Marker } from '@react-google-maps/api'

type props = {
  position: {
    lat: number
    lng: number
  }
}

export function FormMarker({ position }: props) {
  return (
    <Marker
      position={{
        lat: position.lat,
        lng: position.lng
      }}
      animation={google.maps.Animation?.DROP}
      zIndex={99}
    ></Marker>
  )
}
