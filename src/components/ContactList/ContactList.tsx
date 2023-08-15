import { useQuery } from '@tanstack/react-query'
import { IContact, fetchContacts } from '&operations/queries/fetchContacts'
import { Table } from '&components/Table/Table'
import { Input } from '&components/Input/Input'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { sortArray } from '&utils/sortArray'

export function ContactList() {
  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts()
  })

  const [contacts, setContacts] = useState<IContact[]>()
  const [ascendentName, setAscendentName] = useState(true)

  const { control } = useForm()

  function handleData(data: IContact[], asc: boolean) {
    setContacts(sortArray({ data, asc: asc, key: 'name' }))
  }

  function handleOnChange(value: string) {
    const newDataList = data?.filter(
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
    if (data) {
      handleData(data, ascendentName)
    }
  }, [data])

  if (isLoading) {
    return <h2>🌀 Loading...</h2>
  }

  return (
    <div>
      <Input
        control={control}
        fieldName="Nome"
        handleChangeDebounce={handleOnChange}
      />
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
      />
    </div>
  )
}
