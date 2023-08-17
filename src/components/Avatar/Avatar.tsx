import { SAvatar } from './style'
import type { TVariant } from './style'

interface props {
  name: string
  variant?: TVariant
}

export function Avatar({ name, variant = 'sm' }: props) {
  const avatarLetters = name?.toUpperCase().split(' ')

  return (
    <SAvatar variant={variant}>
      {avatarLetters?.[0]?.[0]}
      {avatarLetters?.[1]?.[0]}
    </SAvatar>
  )
}
