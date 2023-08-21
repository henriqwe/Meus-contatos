import styled from 'styled-components'

export type TVariant = 'primary' | 'danger' | 'success' | 'secondary'

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
  background-color: ${({ variant, theme }) => theme.colors[variant][700]};
  color: ${({ variant, theme }) =>
    variant === 'secondary' ? theme.colors.slate : theme.colors.white};

  &:hover {
    background-color: ${({ variant, theme }) => theme.colors[variant][800]};
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  height: 18px;
`
