import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FormMarker } from './FormMarker'

import { initialize } from '@googlemaps/jest-mocks'

beforeEach(() => {
  initialize()
})
describe('FormMarker', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(
      <FormMarker
        position={{
          lat: -68.6102,
          lng: -47.0653
        }}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
