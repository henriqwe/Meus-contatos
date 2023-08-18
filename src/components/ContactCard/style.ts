import { styled } from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const ContactCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
  -moz-box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
  box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
`
export const ContactCardWrapper = styled.div`
  display: flex;
  flex: 1;
`
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`

export const DetailsWrapper = styled.div`
  display: flex;
  padding-left: 0.1rem;
  gap: 0.2rem;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
`
export const PrimaryDetail = styled.span`
  font-size: 1.2rem;
  color: rgb(15 23 42);
  font-weight: 800;
`
export const SecondaryDetail = styled.span`
  font-size: 0.9rem;
  color: rgb(100 116 139);
  font-weight: 400;
`
export const IconWrapper = styled.div`
  height: 100%;
  padding-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChevronRightIcon = styled(Icons.ChevronRightIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: rgb(15 23 42);
`
