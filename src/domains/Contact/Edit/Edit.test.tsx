import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { EditContact } from './Edit'
import { initialize } from '@googlemaps/jest-mocks'
import { TestProviders } from '&utils/tests/TestProviders'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: () => ({
    setQueryData: jest.fn(),
    getQueryData: jest.fn()
  })
}))

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 3
  })
}))

beforeEach(() => {
  initialize()
})

describe('EditContact', () => {
  it('should render the contact list correctly', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <EditContact />
      </TestProviders>
    )
    const name = (await findByTestId('input-name')) as HTMLInputElement
    expect(container).toMatchSnapshot()
    expect(name.value as string).toMatchSnapshot('Clementine Bauch')
  })
})
