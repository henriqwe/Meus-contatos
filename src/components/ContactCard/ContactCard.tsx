import {
  SActionsWrapper,
  SAvatar,
  SAvatarContainer,
  SContactCard,
  SContactCardWrapper,
  SDetailsWrapper,
  SPrimaryDetail,
  SSecondaryDetail,
  STrashIcon
} from './style'

interface props {
  phone: string
  name: string
  email: string
  id: number
  removeAction: (id: number) => void
  navigateAction(id: number): void
}
export function ContactCard({
  id,
  removeAction,
  email,
  name,
  phone,
  navigateAction
}: props) {
  const avatarLetters = name?.toUpperCase().split(' ')
  return (
    <SContactCard>
      <SContactCardWrapper onClick={() => navigateAction(id)}>
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

      <SActionsWrapper onClick={() => removeAction(id)}>
        <STrashIcon />
      </SActionsWrapper>
    </SContactCard>
  )
}
