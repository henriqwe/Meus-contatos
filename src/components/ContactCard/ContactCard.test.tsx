import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactCard } from './ContactCard'
import { TestProviders } from '&utils/tests/TestProviders'

const navigateAction = jest.fn((id: number) => id)

describe('ContactCard', () => {
  it('should render correctly snapshot', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <ContactCard
          email="email@test.com"
          id={1}
          name="teste"
          navigateAction={navigateAction}
          phone="4123534634356"
        />
      </TestProviders>
    )
    const contactCardContainer = (await findByTestId(
      'contactcard-container'
    )) as HTMLDivElement
    waitFor(() => fireEvent.click(contactCardContainer))

    expect(navigateAction).toBeCalled()
  })
})
