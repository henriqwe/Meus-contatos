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
  bottom: 1rem;
  background-color: #ffaf49;
  transition: all 0.5s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #e5993b;
    cursor: pointer;
  }
  transition: all 0.5s;

  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
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
  color: white;
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`
