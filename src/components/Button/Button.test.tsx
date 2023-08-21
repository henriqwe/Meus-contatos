import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '&components/Button/Button'
import { TestProviders } from '&utils/tests/TestProviders'

describe('Button', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <Button variant="danger" data-testid={'button'}>
          teste
        </Button>
      </TestProviders>
    )

    const button = (await findByTestId('button')) as HTMLButtonElement
    const buttonChildren = button.children

    expect(buttonChildren[0].innerHTML).toEqual('teste')
    expect(container).toMatchSnapshot()
  })
})
