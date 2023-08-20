import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DreamerIllustration } from './DreamerIllustration'

describe('DreamerIllustration', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(<DreamerIllustration />)

    expect(container).toMatchSnapshot()
  })
})
