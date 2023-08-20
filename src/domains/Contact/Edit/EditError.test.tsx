import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { EditContact } from './Edit'
import { initialize } from '@googlemaps/jest-mocks'
import * as toaster from '&utils/notification'
import { TestProviders } from '&utils/tests/TestProviders'

const notification = jest.spyOn(toaster, 'notification')

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
    id: 1000
  })
}))

beforeEach(() => {
  initialize()
})

describe('EditContact', () => {
  it('should render the contact list correctly', async () => {
    render(
      <TestProviders>
        <EditContact />
      </TestProviders>
    )

    await waitFor(() =>
      expect(notification).toBeCalledWith('Contato não encontrado', 'error')
    )
  })
})
