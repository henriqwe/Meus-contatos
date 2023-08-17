import { useContacts } from '&contexts/contactsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'

export function ViewContact() {
  const { id } = useParams()
  const { getContactById, contactsQuery } = useContacts()
  const navigate = useNavigate()

  const contact = getContactById(id as string)

  if (contactsQuery.isLoading) {
    return <Loading />
  }
  if (!contact && !contactsQuery.isLoading) {
    throw new Error()
  }

  return (
    <div onClick={() => navigate(routes.editContact.path(contact?.id!))}>
      {contact?.name!}
    </div>
  )
}

export const ErrorBoundary = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>
      <h3>Some Error Boundary</h3>
    </div>
  )
}
