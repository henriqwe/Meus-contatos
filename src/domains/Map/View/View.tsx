import { FloatingActionButton } from '&components/FloatingActionButton/FloatingActionButton'
import { Map } from '&components/Map/Map'
import type { IContact } from '&types/contact'
import { fetchContacts } from '&services/queries/fetchContacts'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export function MapView() {
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

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!contactsQuery.data ? (
        <div></div>
      ) : (
        // <Loading />
        <>
          <Map contacts={contactsQuery.data} />
          <FloatingActionButton />
        </>
      )}
    </div>
  )
}
