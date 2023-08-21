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
import { motion } from 'framer-motion'

interface props {
  isLoading: boolean
  handlePreviousStep: () => void
  activeStep: number
  control: Control<any, any>
  errors: DeepMap<FieldValues, FieldError> & { message?: string }
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  onSubmit: () => void
}
export function PersonalInfoFormStep({
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
            name="name"
            label="Nome *"
            error={errors['name']}
            disabled={isLoading}
            data-testid={'input-name'}
          />
          <Input
            control={control}
            name="email"
            label="Email *"
            error={errors['email']}
            disabled={isLoading}
            data-testid={'input-email'}
          />
          <Input
            control={control}
            name="phone"
            label="Telefone *"
            error={errors['phone']}
            disabled={isLoading}
            data-testid={'input-phone'}
          />
          <Input
            control={control}
            name="username"
            label="Nome de usuário"
            error={errors['username']}
            disabled={isLoading}
            data-testid={'input-username'}
          />
          <Input
            control={control}
            name="website"
            label="Website"
            error={errors['website']}
            disabled={isLoading}
            data-testid={'input-website'}
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
