import { IContact } from '&operations/queries/fetchContacts'
import { Table } from '&components/Table/Table'
import { Input } from '&components/Input/Input'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { sortArrayByKey } from '&utils/handles/sortArrayByKey'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'

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

  return (
    <div>
      <h1>Desafio Técnico Pecege - Frontend</h1>

      <Input
        control={control}
        name="name"
        handleChangeDebounce={handleOnChange}
        label="Nome"
      />
      <div onClick={() => navigate(routes.createContact.path)}>ADICIONAR</div>
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
          <td>
            <div
              onClick={() =>
                navigate(routes.editContact.path(contact.id.toString()))
              }
            >
              EDITAR
            </div>
            <div onClick={() => removeContact(contact.id)}>REMOVER</div>
          </td>
        )}
      />
    </div>
  )
}
