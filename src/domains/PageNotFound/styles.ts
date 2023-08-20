import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
`
export const IllustrationWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  transition: all 0.4s;
  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`
