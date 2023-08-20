import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MainLayout } from './Layout'

describe('Layout', () => {
  it('should render the contact list correctly', async () => {
    const { container, findByTestId } = render(
      <MainLayout>
        <div data-testid={'div-teste'}>teste</div>
      </MainLayout>
    )

    const divTeste = findByTestId('div-teste')
    expect(container).toMatchSnapshot()
    expect(divTeste).toBeTruthy()
  })
})
