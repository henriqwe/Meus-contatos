import styled from 'styled-components'
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

export const SCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow-x: auto;
  flex: 1;
  padding-right: 0.8rem;
  max-height: calc(100vh - 11rem);
  min-height: calc(100vh - 11rem);
`

export const SContainer = styled.section`
  position: relative;
  padding: 0.5rem;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: none;
`
export const SSeparator = styled.div`
  width: 100%;
  border: 1px solid rgba(68, 67, 90, 0.3);
  margin-bottom: 1rem;
`
export const SListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex: 1;
  width: 100%;
`
export const SOrderByNameContent = styled.div`
  display: flex;
  align-items: end;
  gap: 0.3rem;
  color: rgb(30 41 59);
`

export const SUserPlusIcon = styled(UserPlusIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: rgb(15 23 42);
  font-weight: 600;
`
export const SActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  flex: 1;
  width: 100%;
`
export const SButtonText = styled.span`
  font-weight: 700;
`
export const SIllustrationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 6rem;
`
export const SLoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 6rem;
`
export const SIllustrationWrapper = styled.div`
  height: 12rem;
  width: 12rem;
`
export const SIllustrationMessage = styled.span`
  font-size: 1.1rem;
`
export const SBarsArrowDownIcon = styled(BarsArrowDownIcon)`
  width: 1.3rem;
  height: 1.3rem;
`
export const SBarsArrowUpIcon = styled(BarsArrowUpIcon)`
  width: 1.3rem;
  height: 1.3rem;
`
