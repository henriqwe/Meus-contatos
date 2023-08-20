import { IContact } from '&types/contact'
import { fakePromise } from '&utils/fakePromise'

export async function editContact(contact: IContact): Promise<IContact> {
  await fakePromise()

  return contact
}
