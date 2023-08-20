import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FloatingActionButton } from './FloatingActionButton'
import { TestProviders } from '&utils/tests/TestProviders'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  })
}))
describe('FloatingActionButton', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <FloatingActionButton />
      </TestProviders>
    )

    const floatingActionButtonContainer = await findByTestId(
      'floatingactionbutton-container'
    )
    await waitFor(async () => fireEvent.click(floatingActionButtonContainer))

    expect(container).toMatchSnapshot()
  })
})
