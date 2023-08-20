import { IContact } from '&types/contact'
import { fakePromise } from '&utils/fakePromise'

export async function createContact(
  contact: Omit<IContact, 'id'>
): Promise<IContact> {
  await fakePromise()

  let id = Number(localStorage.getItem('contactId'))
  if (!id) {
    id = 1000
  }
  const nextId = id + 1
  localStorage.setItem('contactId', nextId.toString())

  const newContact = { ...contact, id }

  return newContact
}
