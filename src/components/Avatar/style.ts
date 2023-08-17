import styled from 'styled-components'

const variantOptions = {
  sm: {
    width: '4.5rem',
    height: '4.5rem',
    fontSize: '2rem'
  },
  md: {
    width: '6.5rem',
    height: '6.5rem',
    fontSize: '4rem'
  }
}

export type TVariant = keyof typeof variantOptions

export const SAvatar = styled.div<{ variant: TVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(30 64 175);
  color: white;
  border-radius: 100%;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
  ${({ variant }) => variantOptions[variant]}
`
