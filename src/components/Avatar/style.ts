import styled from 'styled-components'

const variantOptions = {
  sm: {
    width: '3rem',
    height: '3rem',
    fontSize: '1.3rem'
  },
  md: {
    width: '5rem',
    height: '5rem',
    fontSize: '3rem'
  }
}

export type TVariant = keyof typeof variantOptions

export const Avatar = styled.div<{ variant: TVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.primary[700]};
  color: ${({ theme }) => theme.colors?.white};
  border-radius: 100%;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
  ${({ variant }) => variantOptions[variant]}
`
