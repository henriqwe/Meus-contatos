import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PeopleSearchIllustration } from './PeopleSearchIllustration'

describe('PeopleSearchIllustration', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(<PeopleSearchIllustration />)

    const svg = (await findByTestId(
      'people-search-illustration'
    )) as HTMLOrSVGElement
    expect(container).toMatchSnapshot()
    expect(svg).toBeTruthy()
  })
})
