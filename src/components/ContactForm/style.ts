import styled from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary[400]};
  padding: 0.8rem;
  padding-top: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: none;
  gap: 0.5rem;
`

export const ActionsButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 2rem;
`
export const Form = styled.form`
  overflow: auto;
  display: flex;
  gap: 0.8rem;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  justify-content: space-between;
`

export const InputsSection = styled.div`
  flex: 1;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  width: 100%;
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
export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`
