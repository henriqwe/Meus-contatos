import styled from 'styled-components'

const variantOptions = {
  left: {
    left: '1rem'
  },
  right: {
    right: '1rem'
  }
}

export const FloatingActionButtonContainer = styled.div<{
  position: 'left' | 'right'
}>`
  position: absolute;
  display: flex;
  width: 5rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  height: 5rem;
  bottom: 2.5rem;
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #ffaf49;
  transition: all 100ms ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #e5993b;
    cursor: pointer;
    width: 5.5rem;
    height: 5.5rem;
  }

  @media (min-width: 768px) {
    height: 4rem;
    width: 4rem;
    &:hover {
      background-color: #e5993b;
      cursor: pointer;
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  ${({ position }) => variantOptions[position]}
`

export const WrapperIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`
