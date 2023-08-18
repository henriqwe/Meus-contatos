import styled from 'styled-components'

export const ErrorMessage = styled.label`
  display: block;
  font-size: 14px;
  padding-left: 0.5rem;
  font-weight: 600;
  color: red;
  padding-top: 0.1rem;
`
export const InputWrapper = styled.div`
  display: block;
  flex: 1;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #dadce0;
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  &:focus {
    border: 2px solid #1e40af;
    outline-color: #1e40af;
  }

  &:not(:placeholder-shown) + span {
    color: #1e40af;
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #fff;
    padding: 0 6px;
  }
  &:focus + span {
    color: #1e40af;
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #fff;
    padding: 0 6px;
  }

  &:not(:focus) + span {
    color: #808080;
  }
`

export const Label = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: #7f8fa6;
  pointer-events: none;
  transition: 0.6s;
`
