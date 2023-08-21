import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Avatar } from '&components/Avatar/Avatar'
import { TestProviders } from '&utils/tests/TestProviders'

describe('Avatar', () => {
  it('should render correctly snapshot', () => {
    const { container } = render(
      <TestProviders>
        <Avatar name="John Doe" />
      </TestProviders>
    )

    expect(container).toMatchSnapshot()
  })
  it('should render the first name letter and the last second name letter', async () => {
    const { findByTestId } = render(
      <TestProviders>
        <Avatar name="John Doe" />
      </TestProviders>
    )

    const avatar = (await findByTestId('avatar-container')) as HTMLDivElement
    expect(avatar.innerHTML).toEqual('JD')
  })
})
