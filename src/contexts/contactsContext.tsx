import { fetchContacts, IContact } from '&operations/queries/fetchContacts'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { createContext, ReactNode, useContext, useState } from 'react'
import * as Yup from 'yup'

interface props {
  children: ReactNode
}
export interface IFormData {
  name: string
  email: string
  phone: string
  username?: string
  street?: string
  suite?: string
  city?: string
  zipcode?: string
  geo?: {
    lat: string
    lng: string
  }
  website?: string
  companyName?: string
  catchPhrase?: string
  bs?: string
}

interface ContactsContextProps {
  contactsQuery: UseQueryResult<IContact[], unknown>
  addContact(contact: IFormData): void
  removeContact(id: number): void
  getContactById(id: number | string): IContact | undefined
  contactSchema: Yup.AnyObjectSchema
}
export const ContactsContext = createContext<ContactsContextProps>(
  {} as ContactsContextProps
)

export const ContactsProvider = ({ children }: props) => {
  const queryClient = useQueryClient()
  const [nextId, setNextId] = useState<number>(1000)
  const contactsQuery = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts(),
    refetchOnWindowFocus: false
  })

  function addContact(contact: IContact) {
    queryClient.setQueryData(['contacts'], (old: any) => [
      ...old,
      { ...contact, id: nextId }
    ])
    setNextId((old) => old++)
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

  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Campo obrigatório'),
    phone: Yup.string().required('Campo obrigatório'),
    username: Yup.string(),
    street: Yup.string(),
    suite: Yup.string(),
    city: Yup.string(),
    lat: Yup.string(),
    lng: Yup.string(),
    website: Yup.string(),
    companyName: Yup.string(),
    catchPhrase: Yup.string(),
    bs: Yup.string()
  })

  return (
    <ContactsContext.Provider
      value={{
        contactsQuery,
        removeContact,
        addContact,
        getContactById,
        contactSchema
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  return useContext(ContactsContext)
}
