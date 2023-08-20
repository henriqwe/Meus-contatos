import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestProviders } from '&utils/tests/TestProviders'
import { ViewContact } from './View'
import * as toaster from '&utils/notification'
import userEvent from '@testing-library/user-event'
import * as mutationDeleteContact from '&services/mutations/deleteContact'

const notification = jest.spyOn(toaster, 'notification')
const deleteContact = jest.spyOn(mutationDeleteContact, 'deleteContact')

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 1
  })
}))

describe('ViewContact', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <ViewContact />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
  it('should should remove a contact in the contact list', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ViewContact />
      </TestProviders>
    )
    await waitFor(async () => findByTestId('avatar-container'))

    const dropdownMenuTrigger = await findByTestId('dropdown-menu-trigger')

    waitFor(() => userEvent.click(dropdownMenuTrigger))

    await waitFor(async () => findByTestId('remove-buttom'))

    const removeButtom = await findByTestId('remove-buttom')
    waitFor(async () => fireEvent.click(removeButtom))

    await waitFor(async () => findByTestId('modal-button-ok'))
    const modalButtonOk = await findByTestId('modal-button-ok')
    waitFor(async () => fireEvent.click(modalButtonOk))

    await waitFor(() =>
      expect(notification).toBeCalledWith(
        'Contato removido com sucesso',
        'success'
      )
    )
    await waitFor(() => expect(deleteContact).toBeCalledWith(1))
  })
})
