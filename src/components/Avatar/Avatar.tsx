import * as S from './style'
import type { TVariant } from './style'

interface props {
  name: string
  variant?: TVariant
}

export function Avatar({ name, variant = 'sm' }: props) {
  const avatarLetters = name?.toUpperCase().split(' ')

  return (
    <S.Avatar variant={variant} data-testid="avatar-container">
      {avatarLetters?.[0]?.[0]}
      {avatarLetters?.[1]?.[0]}
    </S.Avatar>
  )
}
