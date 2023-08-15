import { IContact } from '&operations/queries/fetchContacts'
import { Table } from '&components/Table/Table'
import { Input } from '&components/Input/Input'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { sortArray } from '&utils/sortArray'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'

export function ContactList() {
  const navigate = useNavigate()
  const { contactsQuery, removeContact } = useContacts()

  const [contacts, setContacts] = useState<IContact[]>()
  const [ascendentName, setAscendentName] = useState(true)

  const { control } = useForm()

  function handleData(data: IContact[], asc: boolean) {
    setContacts(sortArray({ data, asc: asc, key: 'name' }))
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
    return <h2>🌀 Loading...</h2>
  }

  return (
    <div>
      <Input
        control={control}
        fieldName="Nome"
        handleChangeDebounce={handleOnChange}
      />
      <div onClick={() => navigate('/novo')}>ADICIONAR</div>
      <Table
        data={contacts}
        titles={[
          {
            name: 'Nome',
            key: 'name',
            onClick: {
              fn: () => toggleAscendentName(contacts as IContact[]),
              ascIcon: ascendentName
            }
          },
          { name: 'Telefone', key: 'phone' },
          { name: 'Email', key: 'email' }
        ]}
        actions={(contact: IContact) => (
          <div>
            <div onClick={() => navigate(`/${contact.id}`)}>VER</div>
            <div onClick={() => removeContact(contact.id)}>REMOVER</div>
          </div>
        )}
      />
    </div>
  )
}
