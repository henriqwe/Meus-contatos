import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dropdown } from './Dropdown'

const FnDropdownOption = jest.fn()
const dropdownOption = [
  {
    content: <div data-testeid={'dropdownoption-content'}>test</div>,
    fn: () => FnDropdownOption()
  }
]

describe('Dropdown', () => {
  it('should render correctly snapshot', async () => {
    const { container } = render(<Dropdown options={dropdownOption} />)

    expect(container).toMatchSnapshot()
  })
})
