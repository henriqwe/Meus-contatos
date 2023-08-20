export interface IContact {
  id: number
  name: string
  email: string
  phone: string
  username: string | undefined
  address: {
    street: string | undefined
    suite: string | undefined
    city: string | undefined
    zipcode: string | undefined
    geo: {
      lat: string | undefined
      lng: string | undefined
    }
  }
  website: string | undefined
  company: {
    name: string | undefined
    catchPhrase: string | undefined
    bs: string | undefined
  }
}
