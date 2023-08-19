import styled from 'styled-components'

export const ErrorMessage = styled.label`
  display: block;
  font-size: 14px;
  padding-left: 0.5rem;
  font-weight: 600;
  color: #c01e2e;
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

export const Input = styled.input<{ onError: boolean; label: string }>`
  width: 100%;
  padding: 7px;
  padding-left: 18px;
  border: 2px solid ${({ onError }) => (onError ? '#C01E2E' : '#dadce0')};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  &:focus {
    border: 2px solid ${({ onError }) => (onError ? '#C01E2E' : '#18a2f3')};
    outline-color: ${({ onError }) => (onError ? '#C01E2E' : '#18a2f3')};
  }
  + span::after {
    content: '${({ label }) => label}';
    display: flex;
  }
  &:not(:placeholder-shown) + span::after {
    transform: translateY(-6px);
  }
  &:focus + span::after {
    transform: translateY(-6px);
  }
  &:not(:placeholder-shown) + span {
    color: ${({ onError }) => (onError ? '#C01E2E' : '#18a2f3')};
    transform: translateX(10px) translateY(-17px);
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #fff;
    height: 5px;
    padding: 0 6px;
  }

  &:focus + span {
    color: ${({ onError }) => (onError ? '#C01E2E' : '#18a2f3')};
    transform: translateX(10px) translateY(-17px);
    font-size: 0.75rem;
    font-weight: 600;
    background-color: white;
    height: 5px;
    padding: 0 6px;
  }

  &:not(:focus) + span {
    color: ${({ onError }) => (onError ? '#C01E2E' : '#808080')};
  }
`

export const Label = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: #7f8fa6;
  pointer-events: none;
  transition: all 70ms ease-out;
`
