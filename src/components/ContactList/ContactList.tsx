import { useQuery } from '@tanstack/react-query'
import { fetchContacts } from '../../operations/queries/fetchContacts'
import { Table } from '../Table/Table'

export function ContactList() {
  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts()
  })
  if (isLoading) {
    return <h2>🌀 Loading...</h2>
  }
  return (
    <Table
      data={data}
      titles={[
        { name: 'Nome', key: 'name' },
        { name: 'Telefone', key: 'phone' },
        { name: 'Email', key: 'email' }
      ]}
    />
  )
}
