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
        <div>
          <S.Container>
            <S.Input
              autoComplete="off"
              id={name}
              type="text"
              placeholder={value || ''}
              disabled={disabled}
              value={value || ''}
              onChange={(e) => {
                onChange(e.target.value)
                debounceChange?.(e.target.value)
              }}
              onError={!!error}
              label={label}
            />
            <S.Label> </S.Label>
          </S.Container>
          <S.ErrorMessage>{error?.message as string}</S.ErrorMessage>
        </div>
      )}
    />
  )
}
