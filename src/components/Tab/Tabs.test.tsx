import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tab, TabItem } from './Tabs'
import { TestProviders } from '&utils/tests/TestProviders'

const fnMoked = jest.fn()

describe('Tabs', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <Tab onTabSelected={fnMoked}>
          <TabItem data-testid={'tab-dados'}>Dados</TabItem>
          <TabItem data-testid={'tab-endereco'}>Endereço</TabItem>
        </Tab>
      </TestProviders>
    )

    const tabDados = await findByTestId('tab-dados')

    await waitFor(async () => fireEvent.click(tabDados))

    expect(container).toMatchSnapshot()
    expect(fnMoked).toBeCalledWith(0)
  })
})
