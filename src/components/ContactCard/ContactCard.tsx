import { Avatar } from '&components/Avatar/Avatar'
import * as S from '&components/ContactCard/style'
import { styled } from 'styled-components'

interface props {
  phone: string
  name: string
  email: string
  id: number
  navigateAction(id: number): void
}
export function ContactCard({ id, email, name, phone, navigateAction }: props) {
  return (
    <S.ContactCard onClick={() => navigateAction(id)}>
      <S.ContactCardWrapper>
        <S.AvatarContainer>
          <Avatar name={name} variant="sm" />
        </S.AvatarContainer>
        <S.DetailsWrapper>
          <Teste>
            <S.PrimaryDetail>{name}</S.PrimaryDetail>
          </Teste>
          <Teste>
            <S.SecondaryDetail>{phone}</S.SecondaryDetail>
          </Teste>
          <Teste>
            <S.SecondaryDetail>{email}</S.SecondaryDetail>
          </Teste>
        </S.DetailsWrapper>
      </S.ContactCardWrapper>
      <S.IconWrapper>
        <S.ChevronRightIcon />
      </S.IconWrapper>
    </S.ContactCard>
  )
}
const Teste = styled.div`
  @media (min-width: 768px) {
    width: 13rem;
  }
`
