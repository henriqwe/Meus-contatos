import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestProviders } from '&utils/tests/TestProviders'
import { ContactForm } from './ContactForm'
import * as toaster from '&utils/notification'
import { routes } from '&utils/routes'
import * as createContactMutation from '&services/mutations/createContact'
import * as editContactMutation from '&services/mutations/editContact'

const notification = jest.spyOn(toaster, 'notification')
const createContact = jest.spyOn(createContactMutation, 'createContact')
const editContact = jest.spyOn(editContactMutation, 'editContact')

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

const contact = {
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157',
    geo: {
      lat: '-68.6102',
      lng: '-47.0653'
    }
  },
  phone: '1-463-123-4447',
  website: 'ramiro.info',
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications'
  }
}

describe('EditContact', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <ContactForm />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
  it('should add a new contact in the contacts list', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactForm />
      </TestProviders>
    )

    // STEP 1
    const name = (await findByTestId('input-name')) as HTMLInputElement
    fireEvent.change(name, { target: { value: 'jhon doe' } })
    const email = (await findByTestId('input-email')) as HTMLInputElement
    fireEvent.change(email, { target: { value: '123@a' } })
    const phone = (await findByTestId('input-phone')) as HTMLInputElement
    fireEvent.change(phone, { target: { value: '8222123' } })
    const buttonOkPersonal = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkPersonal))

    // STEP 2
    await waitFor(async () => findByTestId('input-street'))
    const buttonOkAddress = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkAddress))

    // STEP 3
    ;(await waitFor(async () =>
      findByTestId('input-companyName')
    )) as HTMLInputElement
    const buttonOkCompany = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkCompany))
    ;(await waitFor(async () =>
      findByTestId('modal-button-ok')
    )) as HTMLButtonElement
    const modalButtonOk = (await findByTestId(
      'modal-button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(modalButtonOk))

    await waitFor(() =>
      expect(notification).toBeCalledWith(
        'Contato cadastrado com sucesso!',
        'success'
      )
    )
  })
  it('should edit a contact in the contacts list', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactForm contact={contact} />
      </TestProviders>
    )

    // STEP 1
    const name = (await findByTestId('input-name')) as HTMLInputElement
    fireEvent.change(name, { target: { value: 'Clementine Bauch Maria' } })
    const buttonOkPersonal = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkPersonal))

    // STEP 2
    ;(await waitFor(async () =>
      findByTestId('input-street')
    )) as HTMLInputElement
    const buttonOkAddress = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkAddress))

    // STEP 3
    ;(await waitFor(async () =>
      findByTestId('input-companyName')
    )) as HTMLInputElement
    const buttonOkCompany = (await findByTestId(
      'button-ok'
    )) as HTMLButtonElement
    waitFor(() => fireEvent.click(buttonOkCompany))
    await waitFor(async () => findByTestId('modal-button-ok'))
    const modalButtonOk = await findByTestId('modal-button-ok')
    waitFor(() => fireEvent.click(modalButtonOk))

    await waitFor(() =>
      expect(notification).toBeCalledWith(
        'Contato editado com sucesso!',
        'success'
      )
    )
    await waitFor(() =>
      expect(editContact).toBeCalledWith({
        id: 3,
        name: 'Clementine Bauch Maria',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653'
          }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      })
    )
  })
  it('should exit the form and return to home', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactForm />
      </TestProviders>
    )

    const buttonCancelPernalInfo = await findByTestId('button-cancel')

    waitFor(() => fireEvent.click(buttonCancelPernalInfo))

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toHaveBeenCalledWith(routes.home.path)
  })
  it('should exit the form and return to contant view', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactForm contact={contact} />
      </TestProviders>
    )

    // STEP 1
    const buttonOkPersonal = await findByTestId('button-ok')
    waitFor(() => fireEvent.click(buttonOkPersonal))

    // STEP 2
    const buttonCancelAddress = await findByTestId('button-cancel')
    waitFor(() => fireEvent.click(buttonCancelAddress))

    await waitFor(async () => findByTestId('button-cancel'))

    const buttonCancelPernalInfo = await findByTestId('button-cancel')

    waitFor(() => fireEvent.click(buttonCancelPernalInfo))

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      routes.viewContact.path(contact.id)
    )
  })

  it('should add a new contact in the contacts list', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactForm />
      </TestProviders>
    )

    // STEP 1
    const name = await findByTestId('input-name')
    fireEvent.change(name, { target: { value: 'jhon doe' } })
    const email = await findByTestId('input-email')
    fireEvent.change(email, { target: { value: '123@a' } })
    const phone = await findByTestId('input-phone')
    fireEvent.change(phone, { target: { value: '8222123' } })
    const buttonOkPersonal = await findByTestId('button-ok')
    waitFor(() => fireEvent.click(buttonOkPersonal))

    // STEP 2
    await waitFor(async () => findByTestId('input-street'))
    const buttonOkAddress = await findByTestId('button-ok')
    waitFor(() => fireEvent.click(buttonOkAddress))

    // STEP 3
    await waitFor(async () => findByTestId('input-companyName'))
    const buttonOkCompany = await findByTestId('button-ok')
    waitFor(() => fireEvent.click(buttonOkCompany))
    await waitFor(async () => findByTestId('modal-button-ok'))
    const modalButtonOk = await findByTestId('modal-button-ok')
    waitFor(() => fireEvent.click(modalButtonOk))

    await waitFor(() =>
      expect(notification).toBeCalledWith(
        'Contato cadastrado com sucesso!',
        'success'
      )
    )
    await waitFor(() =>
      expect(createContact).toBeCalledWith({
        email: '123@a',
        name: 'jhon doe',
        phone: '8222123',
        username: undefined,
        website: undefined,
        address: {
          city: undefined,
          geo: {
            lat: undefined,
            lng: undefined
          },
          street: undefined,
          suite: undefined,
          zipcode: undefined
        },
        company: { bs: undefined, catchPhrase: undefined, name: undefined }
      })
    )
  })
})
