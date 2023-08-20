import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestProviders } from '&utils/tests/TestProviders'
import { ViewContact } from './View'
import * as toaster from '&utils/notification'
import userEvent from '@testing-library/user-event'
import * as mutationDeleteContact from '&services/mutations/deleteContact'
import { routes } from '&utils/routes'

const notification = jest.spyOn(toaster, 'notification')
const deleteContact = jest.spyOn(mutationDeleteContact, 'deleteContact')
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 1
  })
}))

describe('ViewContact', () => {
  it('should render the contact list correctly', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <ViewContact />
      </TestProviders>
    )
    const tabEmpresa = await findByTestId('tab-empresa')
    const tabEndereco = await findByTestId('tab-endereco')

    await waitFor(async () => fireEvent.click(tabEmpresa))
    await waitFor(async () => fireEvent.click(tabEndereco))

    expect(container).toMatchSnapshot()
  })
  it('should go to edit contact page', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ViewContact />
      </TestProviders>
    )
    await waitFor(async () => findByTestId('avatar-container'))

    const dropdownMenuTrigger = await findByTestId('dropdown-menu-trigger')

    waitFor(() => userEvent.click(dropdownMenuTrigger))

    await waitFor(async () => findByTestId('edit-buttom'))

    const editButtom = await findByTestId('edit-buttom')
    waitFor(async () => fireEvent.click(editButtom))

    expect(mockedUsedNavigate).toBeCalledWith(routes.editContact.path(1))
  })
  it('should go to home page', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ViewContact />
      </TestProviders>
    )
    await waitFor(async () => findByTestId('avatar-container'))

    const button = await findByTestId('back-home-button')

    await waitFor(async () => userEvent.click(button))

    expect(mockedUsedNavigate).toBeCalledWith(routes.home.path)
  })
  it('should remove a contact in the contact list', async () => {
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
