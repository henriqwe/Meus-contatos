import styled from 'styled-components'

const variantOptions = {
  primary: {
    backgroundColor: '#18a2f3',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2496d8'
    }
  },
  danger: {
    backgroundColor: '#C01E2E',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ad202c'
    }
  },
  success: {
    backgroundColor: '#0A9444',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0b823d'
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
  display: flex;
  height: 35px;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  ${({ variant }) => variantOptions[variant]}
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  height: 18px;
  /* @media (min-width: 768px) {
    width: 13rem;
  } */
`
