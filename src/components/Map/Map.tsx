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

  const [_, setMap] = useState<google.maps.Map | null>(null)

  function handleFitBounds(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds()
    for (const contact of contactsWithLocation) {
      bounds.extend({
        lat: Number(contact.address.geo.lat),
        lng: Number(contact.address.geo.lng)
      })
    }
    map.fitBounds(bounds)
  }
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    let generateFitBounds = true

    if (formMarkerPosition || contactsWithLocation.length === 1) {
      generateFitBounds = false

      const location = {
        lat:
          formMarkerPosition?.lat !== undefined
            ? formMarkerPosition?.lat
            : Number(contactsWithLocation[0].address.geo.lat),
        lng:
          formMarkerPosition?.lng !== undefined
            ? formMarkerPosition?.lng
            : Number(contactsWithLocation[0].address.geo.lng)
      }
      map.setCenter(location)
    }
    if (contactsWithLocation.length > 0) {
      setMarkers(contactsWithLocation)
    }

    if (generateFitBounds) {
      handleFitBounds(map)
    }
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback() {
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
      // center={{
      //   lat: -12.100100128939063,
      //   lng: -49.24919742233473
      // }}
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
