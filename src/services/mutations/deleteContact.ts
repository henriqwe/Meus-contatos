import { fakePromise } from '&utils/fakePromise'

export async function deleteContact(id: number): Promise<number> {
  await fakePromise()

  return id
}
