import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { Avatar } from '&components/Avatar/Avatar'
import { useQuery } from '@tanstack/react-query'
import { notification } from '&utils/notification'
import { useContacts } from '&contexts/contactsContext'
import * as S from './style'

export function ViewContact() {
  const { id } = useParams()

  const navigate = useNavigate()
  const { fetchContact, contactsQuery } = useContacts()

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

  if (isLoading || !contact || contactsQuery.isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <S.ContactHeaderWrapper>
        <S.ContactHeader>
          <div onClick={() => navigate(routes.home.path)}>
            <S.ChevronLeftIcon />
          </div>
          <h1>Contato</h1>

          <div>
            <S.EllipsisVerticalIcon
              onClick={() => navigate(routes.editContact.path(contact?.id!))}
            />
          </div>
        </S.ContactHeader>
        <S.AvatarWrapper>
          <Avatar name={contact?.name} variant="md" />
          <S.AvatarName>{contact?.name}</S.AvatarName>
          <S.AvatarPhone>{contact?.phone}</S.AvatarPhone>
        </S.AvatarWrapper>
      </S.ContactHeaderWrapper>
      <div>
        <div>abas</div>
        <div>conteudo</div>
      </div>
    </S.Container>
  )
}
