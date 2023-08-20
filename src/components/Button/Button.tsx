import * as S from '&components/Button/style'
import type { TVariant } from '&components/Button/style'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TVariant
}

export function Button({ variant, children, ...res }: ButtonProps) {
  return (
    <S.Button {...res} variant={variant}>
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Button>
  )
}
