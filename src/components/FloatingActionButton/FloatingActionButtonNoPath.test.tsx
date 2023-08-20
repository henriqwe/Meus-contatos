import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FloatingActionButton } from './FloatingActionButton'
import { TestProviders } from '&utils/tests/TestProviders'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/123'
  })
}))
describe('FloatingActionButton', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(
      <TestProviders>
        <FloatingActionButton />
      </TestProviders>
    )

    expect(container.innerHTML).toEqual('')
  })
})
