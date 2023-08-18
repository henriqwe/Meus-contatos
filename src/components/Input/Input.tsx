import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  Path
} from 'react-hook-form'
import { useDebounce } from '&hooks/useDebounce'
import * as S from '&components/Input/style'

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
        <S.InputWrapper>
          <S.Label htmlFor={name}>{label}</S.Label>
          <S.Input
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
          <S.ErrorMessage>{error?.message as string}</S.ErrorMessage>
        </S.InputWrapper>
      )}
    />
  )
}
