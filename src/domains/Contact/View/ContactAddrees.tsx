import * as S from './style'
import type { IContact } from '&services/queries/fetchContacts'
import { Map } from '&components/Map/Map'

export function ContactAddrees({ contact }: { contact: IContact }) {
  return (
    <S.TabItemContainer>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Rua</S.InfoTitle>
        <S.InfoDescription>{contact.address.street || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Número</S.InfoTitle>
        <S.InfoDescription>{contact.address.suite || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Cidade</S.InfoTitle>
        <S.InfoDescription>{contact.address.city || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>CEP</S.InfoTitle>
        <S.InfoDescription>{contact.address.zipcode || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      {contact.address.geo.lat && contact.address.geo.lng && (
        <S.MapContainer>
          <Map contacts={[contact]} showInfoWindow={false} />
        </S.MapContainer>
      )}
    </S.TabItemContainer>
  )
}
