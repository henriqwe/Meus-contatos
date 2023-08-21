import { Input } from '&components/Input/Input'
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormHandleSubmit
} from 'react-hook-form'
import { ActionButtons } from '../ActionButtons'
import * as S from '../style'
import { IFormData } from '../type'
import { motion } from 'framer-motion'

interface props {
  isLoading: boolean
  handlePreviousStep: () => void
  activeStep: number
  control: Control<any, any>
  errors: DeepMap<FieldValues, FieldError> & { message?: string }
  handleSubmit: UseFormHandleSubmit<FieldValues, IFormData>
  onSubmit: (_formData: IFormData) => void
}
export function CompanyFormStep({
  isLoading,
  activeStep,
  handlePreviousStep,
  control,
  errors,
  handleSubmit,
  onSubmit
}: props) {
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ width: '100%', height: '100%' }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <S.InputsSection>
          <Input
            control={control}
            name="companyName"
            label="Nome"
            error={errors['companyName']}
            disabled={isLoading}
            data-testid={'input-companyName'}
          />
          <Input
            control={control}
            name="catchPhrase"
            label="Frase de efeito"
            error={errors['catchPhrase']}
            disabled={isLoading}
            data-testid={'input-catchPhrase'}
          />
          <Input
            control={control}
            name="bs"
            label="Estratégia de negócio"
            error={errors['bs']}
            disabled={isLoading}
            data-testid={'input-bs'}
          />
        </S.InputsSection>
      </motion.div>
      <ActionButtons
        activeStep={activeStep}
        handlePreviousStep={handlePreviousStep}
        isLoading={isLoading}
      />
    </S.Form>
  )
}
