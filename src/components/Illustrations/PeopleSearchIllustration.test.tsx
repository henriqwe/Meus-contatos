import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PeopleSearchIllustration } from './PeopleSearchIllustration'

describe('PeopleSearchIllustration', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(<PeopleSearchIllustration />)

    expect(container).toMatchSnapshot()
  })
})
