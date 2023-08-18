import { IContact } from '&operations/queries/fetchContacts'
import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { sortArrayByKey } from '&utils/handles/sortArrayByKey'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { ContactCard } from '&components/ContactCard/ContactCard'
import * as S from '&domains/Contact/List/style'
import { Button } from '&components/Button/Button'
import { IllustrationCard } from '&domains/Contact/List/IllustrationCard'

export function ContactList() {
  const navigate = useNavigate()
  const { contactsQuery, removeContact } = useContacts()

  const [contacts, setContacts] = useState<IContact[]>()
  const [ascendentName, setAscendentName] = useState(true)

  const { control } = useForm()

  const showIllustration =
    (contacts?.length === 0 ||
      contactsQuery?.data?.length === 0 ||
      contactsQuery?.data === undefined) &&
    !contactsQuery?.isLoading

  function handleData(data: IContact[], asc: boolean) {
    setContacts(sortArrayByKey({ data, asc, key: 'name' }))
  }

  function handleOnChange(value: string) {
    const newDataList = contactsQuery?.data?.filter(
      (contact) =>
        contact.name.toLocaleLowerCase()?.includes(value.toLocaleLowerCase())
    )
    handleData(newDataList as IContact[], ascendentName)
  }

  function toggleAscendentName(data: IContact[]) {
    handleData(data, !ascendentName)
    setAscendentName(!ascendentName)
  }

  function handleNavigate(id: number) {
    navigate(routes.viewContact.path(id.toString()))
  }

  useEffect(() => {
    if (contactsQuery?.data) {
      handleData(contactsQuery?.data, ascendentName)
    }
  }, [contactsQuery?.data])

  return (
    <S.Container>
      <h1>Home</h1>

      <S.ActionsContainer>
        <Input
          control={control}
          name="name"
          handleChangeDebounce={handleOnChange}
          label="Buscar"
          disabled={contactsQuery?.isLoading}
        />
        <div>
          <Button
            onClick={() => navigate(routes.createContact.path)}
            variant="success"
          >
            <S.ButtonText>Novo</S.ButtonText> <S.UserPlusIcon />
          </Button>
        </div>
      </S.ActionsContainer>
      <S.ListHeading>
        <h3>Contatos</h3>
        {contacts?.length !== 0 && !contactsQuery?.isLoading && (
          <S.OrderByNameContent
            onClick={() => toggleAscendentName(contacts as IContact[])}
          >
            <span>Nome</span>
            {ascendentName ? <S.BarsArrowUpIcon /> : <S.BarsArrowDownIcon />}
          </S.OrderByNameContent>
        )}
      </S.ListHeading>
      <S.Separator />

      <S.CardList>
        {contactsQuery?.isLoading && (
          <S.LoadingContainer>
            <Loading />
          </S.LoadingContainer>
        )}
        {showIllustration && (
          <IllustrationCard
            notFound={contacts?.length === 0}
            isEmpty={
              contactsQuery?.data?.length === 0 ||
              contactsQuery?.data === undefined
            }
          />
        )}
        {!showIllustration &&
          contacts?.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              phone={contact.phone}
              name={contact.name}
              email={contact.email}
              removeAction={removeContact}
              navigateAction={handleNavigate}
            />
          ))}
      </S.CardList>
    </S.Container>
  )
}
