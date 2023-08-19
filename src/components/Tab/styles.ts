import styled from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`

const tabItemVariants = {
  active: {
    borderBottom: '4px solid #18a2f3',
    color: '#18a2f3',
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
  background-color: white;
  width: 100%;
  padding: 0.625rem;
  cursor: pointer;
  transition: 0.3s;
  ${({ selected }) =>
    selected ? tabItemVariants.active : tabItemVariants.inacitve};
`
