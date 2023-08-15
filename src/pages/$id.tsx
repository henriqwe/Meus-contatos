import { useContacts } from '&contexts/contactsContext'
import { useParams, useNavigate } from 'react-router-dom'

const Page = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { getContactById, contactsQuery } = useContacts()

  const contact = getContactById(id as string)

  if (contactsQuery.isLoading) {
    return <h2>🌀 Loading...</h2>
  }
  if (!contact && !contactsQuery.isLoading) {
    throw new Error()
  }
  return (
    <div>
      <div onClick={() => navigate('/')}>VOLTAR</div>
      <div>{contact?.name}</div>
    </div>
  )
}

export default Page

export const ErrorBoundary = () => {
  return <h3>Some Error Boundary</h3>
}
