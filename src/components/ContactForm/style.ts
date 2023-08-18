import styled from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const Container = styled.section`
  position: relative;
  padding: 0.5rem;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: none;
  align-items: center;
  gap: 2rem;
`

export const ActionsButtons = styled.div`
  display: flex;
  position: absolute;
  width: calc(100vw - 0.5rem);
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  padding: 0.5rem;
`
export const Form = styled.form`
  display: flex;
  gap: 0.8rem;
  flex: 1;
  flex-direction: column;
  width: 100vw;
  padding: 0.5rem;
`
export const XMarkIcon = styled(Icons.XMarkIcon)`
  width: 1rem;
  height: 1rem;
`
export const ChevronLeftIcon = styled(Icons.ChevronLeftIcon)`
  width: 1rem;
  height: 1rem;
`
export const ChevronRightIcon = styled(Icons.ChevronRightIcon)`
  width: 1rem;
  height: 1rem;
`
export const CheckIcon = styled(Icons.CheckIcon)`
  width: 1rem;
  height: 1rem;
`
