import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PageNotFound } from './PageNotFound'
import { TestProviders } from '&utils/tests/TestProviders'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))
describe('PageNotFound', () => {
  it('should render the contact PageNotFound correctly', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <PageNotFound />
      </TestProviders>
    )
    const containerPageNotFound = await findByTestId('container-page-not-found')
    expect(container).toMatchSnapshot()
    expect(containerPageNotFound).toBeTruthy()
  })

  it('should navigate to map page', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <PageNotFound />
      </TestProviders>
    )
    const button = (await findByTestId(
      'button-page-not-found'
    )) as HTMLButtonElement

    await waitFor(async () => fireEvent.click(button))

    expect(mockedUsedNavigate).toBeCalledWith('/')
  })
})
