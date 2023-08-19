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
  padding: 0.8rem;
  padding-top: 1rem;
`
export const UserIcon = styled(Icons.UserIcon)`
  width: 1.5rem;
  height: 1.5rem;
`
export const MapPinIcon = styled(Icons.MapPinIcon)`
  width: 1.5rem;
  height: 1.5rem;
`
export const BuildingStorefrontIcon = styled(Icons.BuildingStorefrontIcon)`
  width: 1.5rem;
  height: 1.5rem;
`
export const InfoTitle = styled.p`
  font-size: 0.9rem;
  color: rgb(15 23 42);
  font-weight: 800;
`
export const InfoDescription = styled.p`
  font-size: 1.1rem;
  color: rgb(100 116 139);
  font-weight: 400;
  padding-left: 1rem;
`
export const TabItemContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
`
export const InfoWrapper = styled.div<{ variant: 'white' | 'gray' }>`
  display: flex;
  flex: 1;
  gap: 0.2rem;
  padding: 0.7rem;
  flex-direction: column;
  background-color: ${({ variant }) =>
    variant === 'white' ? '#fff' : '#F1F5F9'};
`
export const DropdownOptionContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: end;
  justify-content: space-between;
  width: 100%;
`
export const PencilIcon = styled(Icons.PencilIcon)`
  width: 1.3rem;
  height: 1.3rem;
`
export const TrashIcon = styled(Icons.TrashIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: red;
`
export const MapContainer = styled.div`
  width: 100%;
  height: 20rem;
`
