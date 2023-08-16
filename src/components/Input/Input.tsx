import { ReactNode } from 'react'
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  Path
} from 'react-hook-form'
import { useDebounce } from '&hooks/useDebounce'
import { SErrorMessage, SInput, SLabel } from './style'

type InputType = {
  name: Path<FieldValues>
  error?: DeepMap<FieldValues, FieldError> & { message?: string }
  icon?: ReactNode
  control: Control<any, any>
  handleChangeDebounce?: (value: string) => any
  debounceDelay?: number
  label: string
}
export function Input({
  name,
  control,
  handleChangeDebounce,
  debounceDelay = 1000,
  error,
  label
}: InputType) {
  const debounceChange = handleChangeDebounce
    ? useDebounce(handleChangeDebounce, debounceDelay)
    : undefined

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <SLabel htmlFor={name}>{label}</SLabel>
          <SInput
            autoComplete="off"
            id={name}
            type="text"
            value={value || ''}
            onChange={(e) => {
              onChange(e.target.value)
              debounceChange?.(e.target.value)
            }}
          />
          <SErrorMessage>{error?.message as string}</SErrorMessage>
        </>
      )}
    />
  )
}
