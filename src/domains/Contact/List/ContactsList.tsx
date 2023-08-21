import type { IContact } from '&types/contact'
import { fetchContacts } from '&services/queries/fetchContacts'
import { useEffect, useState } from 'react'
import { sortArrayByKey } from '&utils/handles/sortArrayByKey'
import { useNavigate } from 'react-router-dom'
import { routes } from '&utils/routes'
import { ContactCard } from '&components/ContactCard/ContactCard'
import * as S from '&domains/Contact/List/style'
import { IllustrationCard } from '&domains/Contact/List/IllustrationCard'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { FloatingActionButton } from '&components/FloatingActionButton/FloatingActionButton'
import { motion } from 'framer-motion'

interface props {
  ascendentName: boolean
  nameValue?: string
}

export function ContactList({ ascendentName, nameValue }: props) {
  const navigate = useNavigate()
  const [contactsFiltered, setContactsFiltered] = useState<IContact[]>()
  const queryClient = useQueryClient()

  async function handleFetch() {
    const contacts = queryClient.getQueryData(['contacts']) as IContact[]

    if (contacts) {
      return contacts
    }
    return fetchContacts()
  }
  const contactsQuery = useQuery({
    queryKey: ['contacts'],
    queryFn: () => handleFetch(),
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true
  })

  const showIllustration =
    (contactsFiltered?.length === 0 ||
      contactsQuery?.data?.length === 0 ||
      contactsQuery?.data === undefined) &&
    !contactsQuery?.isLoading

  function onFilter(text?: string) {
    if (!text) {
      return contactsQuery?.data as IContact[]
    }
    const newDataList = contactsQuery?.data?.filter((contact) =>
      contact.name.toLocaleLowerCase()?.includes(text.toLocaleLowerCase())
    )
    return newDataList as IContact[]
  }

  function handleData(data: IContact[], asc: boolean) {
    setContactsFiltered(sortArrayByKey({ data, asc, key: 'name' }))
  }

  function handleNavigate(id: number) {
    navigate(routes.viewContact.path(id.toString()))
  }

  useEffect(() => {
    if (contactsQuery?.data) {
      const data = onFilter(nameValue)
      handleData(data, ascendentName)
    }
  }, [contactsQuery?.data, ascendentName, nameValue])

  return (
    <S.CardList>
      {showIllustration ? (
        <IllustrationCard
          notFound={contactsFiltered?.length === 0}
          isEmpty={
            contactsQuery?.data?.length === 0 ||
            contactsQuery?.data === undefined
          }
        />
      ) : (
        contactsFiltered?.map((contact) => (
          <ContactCard
            key={contact.phone + contact.id}
            id={contact.id}
            phone={contact.phone}
            name={contact.name}
            email={contact.email}
            navigateAction={handleNavigate}
          />
        ))
      )}

      <FloatingActionButton />
    </S.CardList>
  )
}
