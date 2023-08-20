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
import { InputHTMLAttributes } from 'react'

interface InputType
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: Path<FieldValues>
  control: Control<any, any>
  label: string
  handleChangeDebounce?: (value: string) => void
  debounceDelay?: number
  error?: DeepMap<FieldValues, FieldError> & { message?: string }
  disabled?: boolean
}

export function Input({
  name,
  control,
  error,
  label,
  debounceDelay = 0,
  handleChangeDebounce = () => null,
  disabled = false,
  ...rest
}: InputType) {
  const debounceChange = useDebounce(handleChangeDebounce, debounceDelay)

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
              isinvalid={error?.message ? 1 : 0}
              label={label}
              {...rest}
            />
            <S.Label> </S.Label>
          </S.Container>
          <S.ErrorMessage>{error?.message as string}</S.ErrorMessage>
        </div>
      )}
    />
  )
}
