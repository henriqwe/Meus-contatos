import { Avatar } from '&components/Avatar/Avatar'
import { Button } from '&components/Button/Button'
import { IContact } from '&operations/queries/fetchContacts'
import { routes } from '&utils/routes'
import { InfoWindow } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface props {
  contact: IContact
  onCloseClick: () => void
}

export function ContactInfoWindow({ contact, onCloseClick }: props) {
  const navigate = useNavigate()
  return (
    <InfoWindow
      key={'InfoWindow' + contact.id}
      onCloseClick={onCloseClick}
      position={{
        lat: Number(contact.address.geo.lat),
        lng: Number(contact.address.geo.lng)
      }}
    >
      <InfoWindowContent>
        <div className="grid-span-1 flex bg-gray-100  justify-center font-semibold rounded-l-md py-2 border-2 !border-white ">
          <Avatar name={contact.name} variant="sm" />
        </div>
        <ContatInfoWrapper>
          <PrimaryDetail>{contact.name}</PrimaryDetail>
          <SecondaryDetail>{contact.phone}</SecondaryDetail>
        </ContatInfoWrapper>
        <Button
          variant="secondary"
          type="button"
          onClick={() => navigate(routes.viewContact.path(contact.id))}
        >
          Ver contato
        </Button>
      </InfoWindowContent>
    </InfoWindow>
  )
}

const InfoWindowContent = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`
export const PrimaryDetail = styled.span`
  font-size: 1.2rem;
  color: rgb(15 23 42);
  font-weight: 800;
`
export const SecondaryDetail = styled.span`
  font-size: 0.9rem;
  color: rgb(100 116 139);
  font-weight: 400;
`
export const ContatInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
