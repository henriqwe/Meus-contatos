import * as S from './style'
import { IContact } from '&operations/queries/fetchContacts'

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
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Latitude</S.InfoTitle>
        <S.InfoDescription>{contact.address.geo.lat || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Longitude</S.InfoTitle>
        <S.InfoDescription>{contact.address.geo.lng || '-'}</S.InfoDescription>
      </S.InfoWrapper>
    </S.TabItemContainer>
  )
}
