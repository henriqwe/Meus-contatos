import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DreamerIllustration } from './DreamerIllustration'

describe('DreamerIllustration', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(<DreamerIllustration />)

    const svg = (await findByTestId('dreamer-illustration')) as HTMLOrSVGElement
    expect(container).toMatchSnapshot()
    expect(svg).toBeTruthy()
  })
})
