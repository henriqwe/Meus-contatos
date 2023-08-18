import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { IContact } from '&operations/queries/fetchContacts'

const containerStyle = {
  width: '100vw',
  height: '100vh'
}

const center = {
  lat: -3.745,
  lng: -38.523
}
interface props {
  contacts: IContact[]
}
function MapComponent({ contacts }: props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center)
    // map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {contacts
        ?.filter(
          (contact) => contact.address.geo.lat && contact.address.geo.lng
        )
        .map((contact) => (
          <Marker
            key={contact.id}
            position={{
              lat: Number(contact.address.geo.lat),
              lng: Number(contact.address.geo.lng)
            }}
          />
        ))}
    </GoogleMap>
  ) : (
    <></>
  )
}

export const Map = React.memo(MapComponent)
