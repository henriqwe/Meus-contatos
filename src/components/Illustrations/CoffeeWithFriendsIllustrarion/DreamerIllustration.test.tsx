import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CoffeeWithFriendsIllustrarion } from './CoffeeWithFriendsIllustrarion'

describe('CoffeeWithFriendsIllustrarion', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <CoffeeWithFriendsIllustrarion />
    )
    const svg = (await findByTestId(
      'coffee-with-friends-illustration'
    )) as HTMLOrSVGElement

    expect(container).toMatchSnapshot()
    expect(svg).toBeTruthy()
  })
})
