import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { IContact } from '&operations/queries/fetchContacts'
import { MarkerDrop } from './MarkerDrop'

interface props {
  contacts: IContact[]
  showInfoWindow?: boolean
}
function MapComponent({ contacts, showInfoWindow = true }: props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  const contactsWithLocation = contacts?.filter(
    (contact) => contact.address.geo.lat && contact.address.geo.lng
  )
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    if (contactsWithLocation.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      for (const contact of contactsWithLocation) {
        bounds.extend({
          lat: Number(contact.address.geo.lat),
          lng: Number(contact.address.geo.lng)
        })
      }

      map.fitBounds(bounds)
    }

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%'
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
      center={{
        lat: -12.100100128939063,
        lng: -49.24919742233473
      }}
      zoom={3}
      options={{
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          }
        ]
      }}
    >
      {contactsWithLocation.map((contact) => (
        <MarkerDrop
          key={'MarkerDrop' + contact.id}
          contact={contact}
          showInfoWindow={showInfoWindow}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  )
}

export const Map = React.memo(MapComponent)
