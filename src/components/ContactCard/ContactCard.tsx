import {
  SIconWrapper,
  SAvatar,
  SAvatarContainer,
  SContactCard,
  SContactCardWrapper,
  SDetailsWrapper,
  SPrimaryDetail,
  SSecondaryDetail,
  SChevronRightIcon
} from '&components/ContactCard/style'

interface props {
  phone: string
  name: string
  email: string
  id: number
  removeAction: (id: number) => void
  navigateAction(id: number): void
}
export function ContactCard({ id, email, name, phone, navigateAction }: props) {
  const avatarLetters = name?.toUpperCase().split(' ')
  return (
    <SContactCard onClick={() => navigateAction(id)}>
      <SContactCardWrapper>
        <SAvatarContainer>
          <SAvatar>
            {avatarLetters?.[0]?.[0]}
            {avatarLetters?.[1]?.[0]}
          </SAvatar>
        </SAvatarContainer>
        <SDetailsWrapper>
          <SPrimaryDetail>{name}</SPrimaryDetail>
          <SSecondaryDetail>{phone}</SSecondaryDetail>
          <SSecondaryDetail>{email}</SSecondaryDetail>
        </SDetailsWrapper>
      </SContactCardWrapper>
      <SIconWrapper>
        <SChevronRightIcon />
      </SIconWrapper>
    </SContactCard>
  )
}
