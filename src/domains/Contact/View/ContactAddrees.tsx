import * as S from './style'
import type { IContact } from '&types/contact'
import { Map } from '&components/Map/Map'

export function ContactAddrees({ contact }: { contact: IContact }) {
  return (
    <S.TabItemContainer data-testid={'tab-container'}>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Rua</S.InfoTitle>
        <S.InfoDescription data-testid={'info-street'}>
          {contact.address.street || '-'}
        </S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Número</S.InfoTitle>
        <S.InfoDescription data-testid={'info-suite'}>
          {contact.address.suite || '-'}
        </S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Cidade</S.InfoTitle>
        <S.InfoDescription data-testid={'info-city'}>
          {contact.address.city || '-'}
        </S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>CEP</S.InfoTitle>
        <S.InfoDescription data-testid={'info-zipcode'}>
          {contact.address.zipcode || '-'}
        </S.InfoDescription>
      </S.InfoWrapper>
      {contact.address.geo.lat && contact.address.geo.lng && (
        <S.MapContainer>
          <Map contacts={[contact]} showInfoWindow={false} />
        </S.MapContainer>
      )}
    </S.TabItemContainer>
  )
}
