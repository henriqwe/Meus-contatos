import { fetchContacts, IContact } from '&operations/queries/fetchContacts'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { createContext, ReactNode, useContext, useState } from 'react'
import * as Yup from 'yup'

interface props {
  children: ReactNode
}

interface ContactsContextProps {
  contactsQuery: UseQueryResult<IContact[], unknown>
  removeContact(id: number): void
  getContactById(id: number | string): IContact | undefined
  contactSchema: Yup.AnyObjectSchema
  nextId: number
  setNextId: React.Dispatch<React.SetStateAction<number>>
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

  function removeContact(id: number) {
    queryClient.setQueryData(['contacts'], (old: any) =>
      old.filter((contact: any) => contact.id !== id)
    )
  }

  function getContactById(id: number | string) {
    const contact = contactsQuery.data?.find(
      (contact) => contact.id.toString() === id.toString()
    )

    return contact
  }

  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Campo obrigatório'),
    phone: Yup.string().required('Campo obrigatório'),
    username: Yup.string(),
    street: Yup.string(),
    zipcode: Yup.string(),
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
        getContactById,
        contactSchema,
        nextId,
        setNextId
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  return useContext(ContactsContext)
}
