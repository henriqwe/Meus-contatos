import React from 'react'
import { SButton, SButtonContainer } from '&components/Button/style'
import type { TVariant } from '&components/Button/style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TVariant
}

export function Button({ variant, children, ...res }: ButtonProps) {
  return (
    <SButton {...res} variant={variant}>
      <SButtonContainer>{children}</SButtonContainer>
    </SButton>
  )
}
