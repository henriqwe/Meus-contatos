import { Button } from '&components/Button/Button'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import * as S from './style'

interface props {
  isLoading: boolean
  activeStep: number
  handlePreviusStep: () => void
}
export function ActionButtons({
  isLoading,
  activeStep,
  handlePreviusStep
}: props) {
  return (
    <S.ActionsButtons>
      <Button
        disabled={isLoading}
        variant="secondary"
        onClick={handlePreviusStep}
        type={'button'}
      >
        {activeStep === 0 ? (
          <XMarkIcon style={{ height: '1rem' }} />
        ) : (
          <ChevronLeftIcon style={{ height: '1rem' }} />
        )}
        <span>{activeStep === 0 ? 'Cancelar' : 'Voltar'}</span>
      </Button>
      <Button disabled={isLoading} variant="primary" type={'submit'}>
        <span>{activeStep < 2 ? 'Avançar' : 'Finalizar'}</span>
        {activeStep < 2 ? (
          <ChevronRightIcon style={{ height: '1rem' }} />
        ) : (
          <CheckIcon style={{ height: '1rem' }} />
        )}
      </Button>
    </S.ActionsButtons>
  )
}
