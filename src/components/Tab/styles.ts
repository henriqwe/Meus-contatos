import styled from 'styled-components'
import { theme } from '../../styles'

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`

const tabItemVariants = {
  active: {
    borderBottom: `4px solid ${theme.colors.primary[700]}`,
    color: theme.colors.primary[700],
    fontWeight: 800
  },
  inacitve: {
    borderBottom: '4px solid transparent',
    color: 'rgb(100 116 139)'
  }
}

export const TabItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0.625rem;
  cursor: pointer;
  transition: 0.3s;
  ${({ selected }) =>
    selected ? tabItemVariants.active : tabItemVariants.inacitve};
`
