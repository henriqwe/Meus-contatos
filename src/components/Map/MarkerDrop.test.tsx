import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MarkerDrop } from './MarkerDrop'
import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório')
})

import { initialize } from '@googlemaps/jest-mocks'

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

beforeEach(() => {
  initialize()
})
describe('MarkerDrop', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(
      <MarkerDrop contact={contact} showInfoWindow={true} />
    )

    expect(container).toMatchSnapshot()
  })
})
