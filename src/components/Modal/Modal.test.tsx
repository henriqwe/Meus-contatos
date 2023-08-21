import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from './Modal'
import { TestProviders } from '&utils/tests/TestProviders'

const fnMoked = jest.fn()

describe('Modal', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <TestProviders>
        <Modal
          action={fnMoked}
          title="modal test"
          triggerContent={<div>trigger</div>}
        />
      </TestProviders>
    )

    const modalTrigger = await findByTestId('modal-trigger')

    await waitFor(async () => fireEvent.click(modalTrigger))

    await waitFor(async () => findByTestId('modal-button-ok'))

    const modalButtonOk = await findByTestId('modal-button-ok')

    waitFor(async () => fireEvent.click(modalButtonOk))

    expect(container).toMatchSnapshot()
    expect(fnMoked).toBeCalled()
  })
})
