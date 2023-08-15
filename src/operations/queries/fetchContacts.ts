import axios from 'axios'

export interface IContact {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export async function fetchContacts(): Promise<IContact[]> {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
}
