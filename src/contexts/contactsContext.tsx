import { fetchContacts, IContact } from '&operations/queries/fetchContacts'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { createContext, ReactNode, useContext } from 'react'

interface props {
  children: ReactNode
}

interface ContactsContextProps {
  contactsQuery: UseQueryResult<IContact[], unknown>
  addContact(contact: IContact): void
  removeContact(id: number): void
  getContactById(id: number | string): IContact | undefined
}
export const ContactsContext = createContext<ContactsContextProps>(
  {} as ContactsContextProps
)

export const ContactsProvider = ({ children }: props) => {
  const queryClient = useQueryClient()

  const contactsQuery = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts(),
    refetchOnWindowFocus: false
  })

  function addContact(contact: IContact) {
    queryClient.setQueryData(['contacts'], (old: any) => [...old, contact])
  }

  function removeContact(id: number) {
    queryClient.setQueryData(['contacts'], (old: any) =>
      old.filter((contact: any) => contact.id !== id)
    )
  }
  function getContactById(id: number | string) {
    const contact = contactsQuery.data?.find(
      (contact) => contact.id.toString() === id.toString()
    )

    if (contact) {
      return contact
    }
    return
  }

  return (
    <ContactsContext.Provider
      value={{ contactsQuery, removeContact, addContact, getContactById }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  return useContext(ContactsContext)
}
