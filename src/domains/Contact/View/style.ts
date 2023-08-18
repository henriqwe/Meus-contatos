import styled from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const Container = styled.section`
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: none;
`

export const ChevronLeftIcon = styled(Icons.ChevronLeftIcon)`
  width: 2rem;
  height: 2rem;
`

export const EllipsisVerticalIcon = styled(Icons.EllipsisVerticalIcon)`
  width: 2rem;
  height: 2rem;
`

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.4rem;
`
export const AvatarName = styled.p`
  font-size: 1.1rem;
  color: rgb(15 23 42);
  font-weight: 800;
`
export const AvatarPhone = styled.p`
  font-size: 0.9rem;
  color: rgb(100 116 139);
  font-weight: 400;
`
export const ContactHeaderWrapper = styled.div`
  background-color: rgba(100, 116, 139, 0.1);
  padding: 0.5rem;
`
