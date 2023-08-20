import { styled } from 'styled-components'
import * as Icons from '@heroicons/react/24/outline'

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 0.5rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.1s ease-in-out;
    transform: translate(0.1rem, 0.1rem);
  }

  cursor: pointer;
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
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 0.7rem;
  }
`
export const PrimaryDetail = styled.span`
  font-size: 0.9rem;
  color: rgb(70 72 77);
  font-weight: 800;
`
export const SecondaryDetail = styled.span`
  font-size: 0.7rem;
  color: rgb(100 116 139);
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
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
export const DeatilContainer = styled.div`
  @media (min-width: 768px) {
    width: 13rem;
  }
`
