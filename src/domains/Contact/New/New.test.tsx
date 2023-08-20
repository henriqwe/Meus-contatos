import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NewContact } from './New'
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

describe('NewContact', () => {
  it('should render the contact list correctly', async () => {
    const { container } = render(
      <TestProviders>
        <NewContact />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
})
