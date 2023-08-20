import * as S from './style'
import type { IContact } from '&types/contact'

export function ContactCompany({ contact }: { contact: IContact }) {
  return (
    <S.TabItemContainer>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Nome</S.InfoTitle>
        <S.InfoDescription>{contact.company.name || '-'}</S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="gray">
        <S.InfoTitle>Frase de efeito</S.InfoTitle>
        <S.InfoDescription>
          {contact.company.catchPhrase || '-'}
        </S.InfoDescription>
      </S.InfoWrapper>
      <S.InfoWrapper variant="white">
        <S.InfoTitle>Estratégia de negócio</S.InfoTitle>
        <S.InfoDescription>{contact.company.bs || '-'}</S.InfoDescription>
      </S.InfoWrapper>
    </S.TabItemContainer>
  )
}
