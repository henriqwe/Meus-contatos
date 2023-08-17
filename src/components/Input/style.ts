import styled from 'styled-components'

export const SInput = styled.input`
  outline: none;
  border: 1px solid rgba(51, 51, 51, 0.3);
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
`
export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(8px / 4);
`
export const SErrorMessage = styled.label`
  display: block;
  font-size: 14px;
  height: 14px;
  font-weight: 600;
  color: red;
  margin-top: 3px;
`
export const SInputWrapper = styled.div`
  display: block;
  flex: 1;
`
