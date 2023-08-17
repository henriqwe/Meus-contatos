import styled from 'styled-components'

export const SContainer = styled.section`
  position: relative;
  padding: 0.5rem;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: none;
  align-items: center;
  gap: 2rem;
`

export const SActionsButtons = styled.div`
  display: flex;
  position: absolute;
  width: calc(100vw - 0.5rem);
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  padding: 0.5rem;
`
