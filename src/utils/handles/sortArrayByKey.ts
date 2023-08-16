export function sortArrayByKey({
  data,
  key,
  asc = true
}: {
  data: any[] | undefined
  key: string
  asc?: boolean
}) {
  const newContacts = data?.slice()

  const sortOperator = asc ? 1 : -1

  return newContacts?.sort((a, b) => {
    if (a[key]?.toLowerCase() > b[key]?.toLowerCase()) {
      return sortOperator
    }
    if (a[key]?.toLowerCase() < b[key]?.toLowerCase()) {
      return -sortOperator
    }
    return 0
  })
}
