import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MapView } from './View'
import { initialize } from '@googlemaps/jest-mocks'
import { TestProviders } from '&utils/tests/TestProviders'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: () => ({
    setQueryData: jest.fn(),
    getQueryData: jest.fn()
  })
}))

beforeEach(() => {
  initialize()
})

describe('MapView', () => {
  it('should render the contact list correctly', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <MapView />
      </TestProviders>
    )

    await waitFor(async () => findByTestId('mapview-container'))
    const mapContainer = await findByTestId('mapview-container')
    expect(container).toMatchSnapshot()
    expect(mapContainer).toBeTruthy()
  })
})
