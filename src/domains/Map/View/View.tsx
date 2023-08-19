import { FloatingActionButton } from '&components/FloatingActionButton/FloatingActionButton'
import { Loading } from '&components/Loading/Loading'
import { Map } from '&components/Map/Map'
import type { IContact } from '&services/queries/fetchContacts'
import { fetchContacts } from '&services/queries/fetchContacts'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export function MapView() {
  const queryClient = useQueryClient()
  async function handleFetch() {
    let contacts = queryClient.getQueryData(['contacts']) as IContact[]

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
        <Loading />
      ) : (
        <>
          <Map contacts={contactsQuery.data} />
          <FloatingActionButton />
        </>
      )}
    </div>
  )
}
