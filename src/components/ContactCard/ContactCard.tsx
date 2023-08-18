import { Avatar } from '&components/Avatar/Avatar'
import * as S from '&components/ContactCard/style'

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
          <S.PrimaryDetail>{name}</S.PrimaryDetail>
          <S.SecondaryDetail>{phone}</S.SecondaryDetail>
          <S.SecondaryDetail>{email}</S.SecondaryDetail>
        </S.DetailsWrapper>
      </S.ContactCardWrapper>
      <S.IconWrapper>
        <S.ChevronRightIcon />
      </S.IconWrapper>
    </S.ContactCard>
  )
}
