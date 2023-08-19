import { IContact, fetchContacts } from '&operations/queries/fetchContacts'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export function useContact(id: string) {
  const [error, setError] = useState<Error>()
  const queryClient = useQueryClient()
  let contacts = queryClient.getQueryData(['contacts']) as IContact[]

  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => fetchContacts(),
    enabled: contacts?.length === 0 || contacts?.length === undefined,
    refetchOnWindowFocus: false,
    retry: false
  })

  const contact = (contacts || data)?.find(
    (contact) => contact.id.toString() === id?.toString()
  )

  if (!contact && !isLoading && !error) {
    setError(new Error('Contato não encontrado'))
  }
  return { data: contact, isLoading, error }
}
