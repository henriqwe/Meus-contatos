import styled from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow-x: auto;
  flex: 1;
  padding-right: 0.8rem;
  padding-left: 0.4rem;
  max-height: calc(100vh - 11rem);
  min-height: calc(100vh - 11rem);
`

export const Container = styled.section`
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: none;
`
export const Separator = styled.div`
  width: 100%;
  border: 1px solid rgba(68, 67, 90, 0.13);
  margin-top: 1rem;
  margin-bottom: 1.4rem;
`
export const ListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex: 1;
  width: 100%;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`
export const OrderByNameContent = styled.div`
  display: flex;
  align-items: end;
  gap: 0.3rem;
  color: rgb(30 41 59);
  cursor: pointer;
`

export const UserPlusIcon = styled(Icons.UserPlusIcon)`
  width: 1.3rem;
  height: 1.3rem;
  font-weight: 600;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  width: 100%;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`
export const ButtonText = styled.span`
  font-weight: 700;
`
export const IllustrationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 6rem;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 6rem;
`
export const IllustrationWrapper = styled.div`
  height: 12rem;
  width: 12rem;
`
export const IllustrationMessage = styled.span`
  font-size: 1.1rem;
`
export const BarsArrowDownIcon = styled(Icons.BarsArrowDownIcon)`
  width: 1.3rem;
  height: 1.3rem;
`
export const BarsArrowUpIcon = styled(Icons.BarsArrowUpIcon)`
  width: 1.3rem;
  height: 1.3rem;
`
export const Header = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 1rem;
`
