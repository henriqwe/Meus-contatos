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

type InputType = {
  fieldName: Path<FieldValues>
  error?: DeepMap<FieldValues, FieldError> & { message?: string }
  icon?: ReactNode
  control: Control<FieldValues, object>
  handleChangeDebounce?: (value: string) => any
  debounceDelay?: number
}
export function Input({
  fieldName,
  control,
  handleChangeDebounce,
  debounceDelay = 1000,
  error
}: InputType) {
  const debounceChange = handleChangeDebounce
    ? useDebounce(handleChangeDebounce, debounceDelay)
    : undefined

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange } }) => (
        <>
          <input
            autoComplete="off"
            id={fieldName}
            type="text"
            onChange={(e) => {
              onChange(e.target.value)
              debounceChange?.(e.target.value)
            }}
          />
          {error && <div>{error?.message as string}</div>}
        </>
      )}
    />
  )
}
