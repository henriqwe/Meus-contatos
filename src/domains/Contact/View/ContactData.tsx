import * as S from './style'
import type { IContact } from '&services/queries/fetchContacts'

export function ContactData({ contact }: { contact: IContact }) {
  return (
    <S.TabItemContainer>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Nome</S.InfoTitle>
        <S.InfoDescription>{contact.name || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Telefone</S.InfoTitle>
        <S.InfoDescription>{contact.phone || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>E-mail</S.InfoTitle>
        <S.InfoDescription>{contact.email || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Website</S.InfoTitle>
        <S.InfoDescription>{contact.website || '-'}</S.InfoDescription>
      </S.InfoWrapper>
    </S.TabItemContainer>
  )
}
