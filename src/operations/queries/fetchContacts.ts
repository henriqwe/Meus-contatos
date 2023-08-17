import { fakePromise } from '&utils/fakePromise'
import axios from 'axios'

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

export async function fetchContacts(): Promise<IContact[]> {
  await fakePromise()
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
}
