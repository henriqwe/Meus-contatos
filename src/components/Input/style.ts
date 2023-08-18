import styled from 'styled-components'

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(51, 51, 51, 0.3);
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
`
export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(8px / 4);
`
export const ErrorMessage = styled.label`
  display: block;
  font-size: 14px;
  height: 14px;
  font-weight: 600;
  color: red;
  margin-top: 3px;
`
export const InputWrapper = styled.div`
  display: block;
  flex: 1;
`
