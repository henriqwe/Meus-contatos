import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactList } from './ContactsList'
import { TestProviders } from '&utils/tests/TestProviders'

describe('ContactList', () => {
  it('should render the contact list correctly', async () => {
    const { container, findAllByTestId } = render(
      <TestProviders>
        <ContactList ascendentName={true} nameValue="" />
      </TestProviders>
    )
    const names = await findAllByTestId('name')
    const phones = await findAllByTestId('phone')
    const emails = await findAllByTestId('email')

    expect(names[0].textContent).toEqual('Chelsey Dietrich')
    expect(phones[0].textContent).toEqual('(254)954-1289')
    expect(emails[0].textContent).toEqual('Lucio_Hettinger@annie.ca')

    expect(container).toMatchSnapshot()
  })
})
