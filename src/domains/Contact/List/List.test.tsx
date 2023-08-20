import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { List } from './List'
import { TestProviders } from '&utils/tests/TestProviders'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))
describe('List', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })

  it('should navigate to map page', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )
    const floatingactionbuttonContainer = await findByTestId(
      'floatingactionbutton-container'
    )

    await waitFor(() => fireEvent.click(floatingactionbuttonContainer))

    expect(mockedUsedNavigate).toBeCalledWith('/mapa')
  })
  it('should navigate to create contact page', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )
    const buttonNewContact = await findByTestId('button-new-contact')

    await waitFor(() => fireEvent.click(buttonNewContact))

    expect(mockedUsedNavigate).toBeCalledWith('/cadastrar')
  })

  it('should sort contact name in descendent format', async () => {
    const { findByTestId, findAllByTestId } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )
    const namesAsc = await findAllByTestId('name')
    const phonesAsc = await findAllByTestId('phone')
    const emailsAsc = await findAllByTestId('email')

    expect(namesAsc[0].textContent).toEqual('Chelsey Dietrich')
    expect(phonesAsc[0].textContent).toEqual('(254)954-1289')
    expect(emailsAsc[0].textContent).toEqual('Lucio_Hettinger@annie.ca')

    const button = await findByTestId('button-sort-name')
    await waitFor(() => fireEvent.click(button))

    const namesDesc = await findAllByTestId('name')
    const phonesDesc = await findAllByTestId('phone')
    const emailsDesc = await findAllByTestId('email')

    expect(namesDesc[0].textContent).toEqual('Patricia Lebsack')
    expect(phonesDesc[0].textContent).toEqual('493-170-9623 x156')
    expect(emailsDesc[0].textContent).toEqual('Julianne.OConner@kory.org')
  })
  it('should sort contact name in descendent format', async () => {
    const { findByTestId, findAllByTestId } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )
    const namesAsc = await findAllByTestId('name')
    const phonesAsc = await findAllByTestId('phone')
    const emailsAsc = await findAllByTestId('email')

    expect(namesAsc[0].textContent).toEqual('Chelsey Dietrich')
    expect(phonesAsc[0].textContent).toEqual('(254)954-1289')
    expect(emailsAsc[0].textContent).toEqual('Lucio_Hettinger@annie.ca')

    const button = await findByTestId('button-sort-name')
    await waitFor(() => fireEvent.click(button))

    const namesDesc = await findAllByTestId('name')
    const phonesDesc = await findAllByTestId('phone')
    const emailsDesc = await findAllByTestId('email')

    expect(namesDesc[0].textContent).toEqual('Patricia Lebsack')
    expect(phonesDesc[0].textContent).toEqual('493-170-9623 x156')
    expect(emailsDesc[0].textContent).toEqual('Julianne.OConner@kory.org')
  })
  it('should show a message and illustration in the screen when not found a searched contact', async () => {
    const { findByTestId, findAllByTestId, findByText } = render(
      <TestProviders>
        <List />
      </TestProviders>
    )
    const namesAsc = await findAllByTestId('name')
    const phonesAsc = await findAllByTestId('phone')
    const emailsAsc = await findAllByTestId('email')

    expect(namesAsc[0].textContent).toEqual('Chelsey Dietrich')
    expect(phonesAsc[0].textContent).toEqual('(254)954-1289')
    expect(emailsAsc[0].textContent).toEqual('Lucio_Hettinger@annie.ca')

    const input = (await findByTestId('search-input')) as HTMLInputElement
    await waitFor(() =>
      fireEvent.change(input, { target: { value: 'jhon doe bla' } })
    )

    // promise to await debounce
    await waitFor(async () => await findByText('Contato não encontrado'), {
      timeout: 1200
    })

    const message = (await findByText(
      'Contato não encontrado'
    )) as HTMLSpanElement
    const illustration = (await findByTestId(
      'people-search-illustration'
    )) as HTMLOrSVGElement

    expect(illustration).toBeTruthy()
    expect(message).toBeTruthy()
  })
})
