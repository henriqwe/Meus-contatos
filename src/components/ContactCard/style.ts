import { styled } from 'styled-components'
import { TrashIcon } from '@heroicons/react/24/outline'

export const SContactCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
  -moz-box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
  box-shadow: -2px 4px 15px -3px rgba(204, 202, 204, 1);
`
export const SContactCardWrapper = styled.div`
  display: flex;
  flex: 1;
`
export const SAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
export const SAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(30 64 175);
  color: white;
  border-radius: 100%;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
`
export const SDetailsWrapper = styled.div`
  display: flex;
  padding-left: 0.1rem;
  gap: 0.2rem;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
`
export const SPrimaryDetail = styled.span`
  font-size: 1.2rem;
  color: rgb(15 23 42);
  font-weight: 800;
`
export const SSecondaryDetail = styled.span`
  font-size: 0.9rem;
  color: rgb(100 116 139);
  font-weight: 400;
`
export const SActionsWrapper = styled.div`
  background-color: red;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  width: 2.5rem;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const STrashIcon = styled(TrashIcon)`
  width: 1.4rem;
  height: 1.4rem;
  color: white;
`
