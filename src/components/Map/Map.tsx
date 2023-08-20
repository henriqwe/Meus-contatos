import { memo, useCallback, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import type { IContact } from '&types/contact'
import { MarkerDrop } from './MarkerDrop'
import { FormMarker } from './FormMarker'

interface props {
  contacts: IContact[]
  showInfoWindow?: boolean
  onMapClick?: (e: google.maps.MapMouseEvent) => void
  formMarkerPosition?: { lat: number; lng: number }
}

function MapComponent({
  contacts,
  showInfoWindow = true,
  onMapClick,
  formMarkerPosition
}: props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.VITE_GOOGLE_MAPS_API_KEY || ''
  })

  const contactsWithLocation = contacts?.filter(
    (contact) => contact.address.geo.lat && contact.address.geo.lng
  )

  const [markers, setMarkers] = useState<IContact[]>([])
  const [formMarker, setFormMarker] = useState<
    { lat: number; lng: number } | undefined
  >()

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds()
    if (formMarkerPosition) {
      bounds.extend({
        lat: Number(formMarkerPosition.lat),
        lng: Number(formMarkerPosition.lng)
      })
    }
    if (contactsWithLocation.length > 0) {
      for (const contact of contactsWithLocation) {
        bounds.extend({
          lat: Number(contact.address.geo.lat),
          lng: Number(contact.address.geo.lng)
        })
      }
      setMarkers(contactsWithLocation)
    }
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  function handleMapClick(event: google.maps.MapMouseEvent) {
    if (onMapClick) {
      onMapClick(event)
      if (markers?.length > 0) {
        setMarkers([])
      }
      setFormMarker({
        lat: event.latLng?.lat() as number,
        lng: event.latLng?.lng() as number
      })
    }
  }
  useEffect(() => {
    setFormMarker(formMarkerPosition)
  }, [formMarkerPosition])

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
      data-testeid={'map'}
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
      onClick={handleMapClick}
    >
      {markers.map((contatc) => (
        <MarkerDrop
          key={contatc.id}
          contact={contatc}
          showInfoWindow={showInfoWindow}
        />
      ))}
      {formMarker && <FormMarker position={formMarker} />}
    </GoogleMap>
  ) : (
    <></>
  )
}

export const Map = memo(MapComponent)
