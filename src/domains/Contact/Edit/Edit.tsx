import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { ContactForm } from '&components/ContactForm/ContactForm'
import { useContact } from '&hooks/useContact'
import { notification } from '&utils/notification'
import * as S from './style'
export function EditContact() {
  const { id } = useParams()
  const navigate = useNavigate()

  const contact = useContact(id!)

  if (contact.error) {
    navigate(routes.home.path)
    notification(contact.error.message, 'error')
    return <></>
  }
  if (contact.isLoading || !contact.data) {
    return (
      <S.LoadingContainer>
        <Loading />
      </S.LoadingContainer>
    )
  }

  return <ContactForm contact={contact.data} />
}
