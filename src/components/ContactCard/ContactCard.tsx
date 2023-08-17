import { Avatar } from '&components/Avatar/Avatar'
import {
  SIconWrapper,
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
  return (
    <SContactCard onClick={() => navigateAction(id)}>
      <SContactCardWrapper>
        <SAvatarContainer>
          <Avatar name={name} variant="sm" />
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
