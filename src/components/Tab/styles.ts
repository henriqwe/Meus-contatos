import styled from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background: red;
  align-items: stretch;
`

const tabItemVariants = {
  active: {
    borderBottom: '4px solid rgb(30 64 175)',
    color: 'rgb(30 64 175)',
    fontWeight: 800
  },
  inacitve: {
    borderBottom: '4px solid transparent'
  }
}

export const TabItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  padding: 0.625rem;
  cursor: pointer;
  transition: 0.3s;
  ${({ selected }) =>
    selected ? tabItemVariants.active : tabItemVariants.inacitve};
`
