import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MapView } from './View'
import { initialize } from '@googlemaps/jest-mocks'
import { TestProviders } from '&utils/tests/TestProviders'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: () => ({
    setQueryData: jest.fn(),
    getQueryData: jest
      .fn()
      .mockReturnValueOnce({ data: [{ id: 1, quantity: 1 }] })
      .mockReturnValueOnce({ data: [{ id: 1, quantity: 2 }] })
  })
}))

beforeEach(() => {
  initialize()
})

describe('MapView', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <MapView />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
})
