import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestProviders } from '&utils/tests/TestProviders'
import { ContactAddrees } from './ContactAddrees'

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 1
  })
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

describe('ContactAddrees', () => {
  it('should render the contact list correctly', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <ContactAddrees contact={contact} />
      </TestProviders>
    )

    await waitFor(async () => findByTestId('tab-container'))

    const street = (await findByTestId('info-street')) as HTMLParagraphElement
    const suite = (await findByTestId('info-suite')) as HTMLParagraphElement
    const city = (await findByTestId('info-city')) as HTMLParagraphElement
    const zipcode = (await findByTestId('info-zipcode')) as HTMLParagraphElement

    expect(street.innerHTML).toEqual(contact.address.street)
    expect(suite.innerHTML).toEqual(contact.address.suite)
    expect(city.innerHTML).toEqual(contact.address.city)
    expect(zipcode.innerHTML).toEqual(contact.address.zipcode)

    expect(container).toMatchSnapshot()
  })
})
