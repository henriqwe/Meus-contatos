import styled from 'styled-components'

const variantOptions = {
  primary: {
    backgroundColor: '#1E40AF',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1a3691'
    }
  },
  danger: {
    backgroundColor: '#dc2626',
    color: 'white',
    '&:hover': {
      backgroundColor: '#bf2121'
    }
  },
  success: {
    backgroundColor: '#84cc16',
    color: 'black',
    '&:hover': {
      backgroundColor: '#6fad10'
    }
  },
  secondary: {
    backgroundColor: '#e2e8f0',
    color: 'black',
    '&:hover': {
      backgroundColor: '#d1d6de'
    }
  }
}

export type TVariant = keyof typeof variantOptions

export const Button = styled.button<{ variant: TVariant }>`
  border: none;
  display: inline-flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  ${({ variant }) => variantOptions[variant]}
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  white-space: nowrap;
`
