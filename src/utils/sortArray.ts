export function sortArray({
  data,
  key,
  asc = true
}: {
  data: any[] | undefined
  key?: string
  asc?: boolean
}) {
  const newContacts = data?.slice()

  const sortOperator = asc ? 1 : -1

  if (key) {
    return newContacts?.sort((a, b) => {
      if (a[key] > b[key]) {
        return sortOperator
      }
      if (a[key] < b[key]) {
        return -sortOperator
      }
      return 0
    })
  }
  return newContacts?.sort((a, b) => {
    if (a > b) {
      return sortOperator
    }
    if (a < b) {
      return -sortOperator
    }
    return 0
  })
}
