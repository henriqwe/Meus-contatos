import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  Path
} from 'react-hook-form'
import { useDebounce } from '&hooks/useDebounce'
import {
  SErrorMessage,
  SInput,
  SInputWrapper,
  SLabel
} from '&components/Input/style'

type InputType = {
  name: Path<FieldValues>
  control: Control<any, any>
  label: string
  handleChangeDebounce?: (value: string) => any
  debounceDelay?: number
  error?: DeepMap<FieldValues, FieldError> & { message?: string }
  disabled?: boolean
}
export function Input({
  name,
  control,
  handleChangeDebounce,
  error,
  label,
  debounceDelay = 1000,
  disabled = false
}: InputType) {
  const debounceChange = handleChangeDebounce
    ? useDebounce(handleChangeDebounce, debounceDelay)
    : undefined

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <SInputWrapper>
          <SLabel htmlFor={name}>{label}</SLabel>
          <SInput
            autoComplete="off"
            id={name}
            type="text"
            disabled={disabled}
            value={value || ''}
            onChange={(e) => {
              onChange(e.target.value)
              debounceChange?.(e.target.value)
            }}
          />
          <SErrorMessage>{error?.message as string}</SErrorMessage>
        </SInputWrapper>
      )}
    />
  )
}
