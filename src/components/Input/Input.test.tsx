import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório')
})

const onSubmitForm = jest.fn()
describe('Input', () => {
  it('should render correctly snapshot', async () => {
    const { result } = renderHook(() => useForm())

    const { container } = render(
      <Input control={result.current.control} label="teste" name="john due" />
    )

    expect(container).toMatchSnapshot()
  })
  it('not should submit when field is not filled ', async () => {
    const { result } = renderHook(() =>
      useForm({ resolver: yupResolver(schema) })
    )
    const {
      control,
      handleSubmit,
      formState: { errors }
    } = result.current

    const { findByTestId } = render(
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          control={control}
          label="name"
          name="name"
          data-testid={'inputName'}
          error={errors['name']}
          value={undefined}
        />
        <button data-testid={'buttonOK'} type="submit">
          ok
        </button>
      </form>
    )

    const inputName = await findByTestId('inputName')

    const buttonOK = await findByTestId('buttonOK')

    await waitFor(() => fireEvent.click(buttonOK))
    expect(onSubmitForm).not.toBeCalled()
    fireEvent.change(inputName, { target: { value: 'Clementine Bauch Maria' } })

    await waitFor(() => fireEvent.click(buttonOK))

    expect(onSubmitForm).toBeCalledTimes(1)
  })
})
