import styled from 'styled-components'

const SButtonBase = styled.button`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  letter-spacing: inherit;
  font-size: inherit;
  text-align: inherit;
`
export const SButtonPrimary = styled(SButtonBase)`
  background-color: rgb(30 64 175);
  color: white;
`
export const SButtonSecondary = styled(SButtonBase)`
  background: rgb(226 232 240);
  color: black;
`
export const SButtonDanger = styled(SButtonBase)`
  background: rgb(220 38 38);
  color: white;
`
export const SButtonSuccess = styled(SButtonBase)`
  background: rgb(132 204 22);
  color: black;
`
