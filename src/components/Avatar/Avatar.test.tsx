import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Avatar } from '&components/Avatar/Avatar'

describe('Avatar', () => {
  it('should render correctly snapshot', () => {
    const { container } = render(<Avatar name="John Doe" />)

    expect(container).toMatchSnapshot()
  })
  it('should render the first name letter and the last second name letter', async () => {
    const { findByTestId } = render(<Avatar name="John Doe" />)

    const avatar = (await findByTestId('avatar-container')) as HTMLDivElement
    expect(avatar.innerHTML).toEqual('JD')
  })
})
