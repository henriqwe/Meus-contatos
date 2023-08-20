import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestProviders } from '&utils/tests/TestProviders'
import { Map as MapContainer } from './Map'
import { initialize } from '@googlemaps/jest-mocks'

beforeEach(() => {
  initialize()
})

const contacts = [
  {
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
]
describe('EditContact', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <MapContainer contacts={contacts} />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
})
