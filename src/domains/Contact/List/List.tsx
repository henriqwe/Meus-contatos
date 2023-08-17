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
import {
  SActionsContainer,
  SBarsArrowDownIcon,
  SBarsArrowUpIcon,
  SButtonText,
  SCardList,
  SContainer,
  SListHeading,
  SOrderByNameContent,
  SSeparator,
  SUserPlusIcon
} from '&domains/Contact/List/style'
import { Button } from '&components/Button/Button'
import { IllustrationCard } from '&domains/Contact/List/IllustrationCard'

export function ContactList() {
  const navigate = useNavigate()
  const { contactsQuery, removeContact } = useContacts()

  const [contacts, setContacts] = useState<IContact[]>()
  const [ascendentName, setAscendentName] = useState(true)

  const { control } = useForm()

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

  useEffect(() => {
    if (contactsQuery?.data) {
      handleData(contactsQuery?.data, ascendentName)
    }
  }, [contactsQuery?.data])

  if (contactsQuery?.isLoading) {
    return <Loading />
  }

  function handleNavigate(id: number) {
    navigate(routes.editContact.path(id.toString()))
  }
  return (
    <SContainer>
      <h1>Home</h1>

      <SActionsContainer>
        <Input
          control={control}
          name="name"
          handleChangeDebounce={handleOnChange}
          label="Buscar"
        />
        <div>
          <Button
            onClick={() => navigate(routes.createContact.path)}
            variant="success"
          >
            <SButtonText>Novo</SButtonText> <SUserPlusIcon />
          </Button>
        </div>
      </SActionsContainer>
      <SListHeading>
        <h3>Contatos</h3>
        {contacts?.length !== 0 && (
          <SOrderByNameContent
            onClick={() => toggleAscendentName(contacts as IContact[])}
          >
            <span>Nome</span>
            {ascendentName ? <SBarsArrowUpIcon /> : <SBarsArrowDownIcon />}
          </SOrderByNameContent>
        )}
      </SListHeading>
      <SSeparator />

      <SCardList>
        {(contacts?.length === 0 ||
          contactsQuery?.data?.length === 0 ||
          contactsQuery?.data === undefined) && (
          <IllustrationCard
            notFound={contacts?.length === 0}
            isEmpty={
              contactsQuery?.data?.length === 0 ||
              contactsQuery?.data === undefined
            }
          />
        )}
        {contacts?.map((contact) => (
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
      </SCardList>
    </SContainer>
  )
}
