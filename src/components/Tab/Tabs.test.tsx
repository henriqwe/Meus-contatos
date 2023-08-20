import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tab, TabItem } from './Tabs'

const fnMoked = jest.fn()

describe('Tabs', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <Tab onTabSelected={fnMoked}>
        <TabItem data-testid={'tab-dados'}>Dados</TabItem>
        <TabItem data-testid={'tab-endereco'}>Endereço</TabItem>
      </Tab>
    )

    const tabDados = await findByTestId('tab-dados')

    await waitFor(async () => fireEvent.click(tabDados))

    expect(container).toMatchSnapshot()
    expect(fnMoked).toBeCalledWith(0)
  })
})
