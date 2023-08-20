import { IContact } from '&types/contact'
import { fakePromise } from '&utils/fakePromise'
import axios from 'axios'

export async function fetchContacts(): Promise<IContact[]> {
  await fakePromise()

  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.data)
}
