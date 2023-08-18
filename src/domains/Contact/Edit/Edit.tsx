import { useContacts } from '&contexts/contactsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { ContactForm } from '&components/ContactForm/ContactForm'
import { useQuery } from '@tanstack/react-query'
import { notification } from '&utils/notification'

export function EditContact() {
  const { id } = useParams()
  const { fetchContact } = useContacts()
  const navigate = useNavigate()

  const { data: contact, isLoading } = useQuery({
    queryKey: ['contact'],
    queryFn: () => fetchContact(id!),
    onError: (error: Error) => {
      notification(error.message, 'error')
      navigate(routes.home.path)
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  if (isLoading || !contact) {
    return <Loading />
  }

  return <ContactForm contact={contact} />
}
