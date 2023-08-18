import { Loading } from '&components/Loading/Loading'
import { Map } from '&components/Map/Map'
import { useContacts } from '&contexts/contactsContext'
export function MapView() {
  const { contactsQuery } = useContacts()

  return (
    <>
      {!contactsQuery.data ? (
        <Loading />
      ) : (
        <Map contacts={contactsQuery.data} />
      )}
    </>
  )
}
