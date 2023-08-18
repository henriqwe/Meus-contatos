import { fetchContacts, IContact } from '&operations/queries/fetchContacts'
import { fakePromise } from '&utils/fakePromise'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { createContext, ReactNode, useContext, useState } from 'react'
import * as Yup from 'yup'

interface props {
  children: ReactNode
}

interface ContactsContextProps {
  contactsQuery: UseQueryResult<IContact[], unknown>
  contactSchema: Yup.AnyObjectSchema
  nextId: number
  setNextId: React.Dispatch<React.SetStateAction<number>>
  fetchContact(id: string): Promise<IContact>
}
export const ContactsContext = createContext<ContactsContextProps>(
  {} as ContactsContextProps
)

export const ContactsProvider = ({ children }: props) => {
  const [nextId, setNextId] = useState<number>(1000)

  const contactsQuery = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts(),
    refetchOnWindowFocus: false
  })

  async function fetchContact(id: string) {
    await fakePromise()

    const contacts = contactsQuery.data || (await fetchContacts())

    const contact = contacts?.find(
      (contact) => contact.id.toString() === id?.toString()
    )

    if (contact) {
      return contact
    }
    throw new Error('Contato não econtrado')
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
        contactSchema,
        nextId,
        setNextId,
        fetchContact
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => {
  return useContext(ContactsContext)
}
