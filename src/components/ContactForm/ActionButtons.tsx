import { Button } from '&components/Button/Button'
import * as S from './style'

interface props {
  isLoading: boolean
  activeStep: number
  handlePreviousStep: () => void
}
export function ActionButtons({
  isLoading,
  activeStep,
  handlePreviousStep
}: props) {
  return (
    <S.ActionsButtons>
      <Button
        disabled={isLoading}
        variant="secondary"
        onClick={handlePreviousStep}
        type={'button'}
        data-testid="button-cancel"
      >
        {activeStep === 0 ? <S.XMarkIcon /> : <S.ChevronLeftIcon />}
        <span>{activeStep === 0 ? 'Cancelar' : 'Voltar'}</span>
      </Button>
      <Button
        disabled={isLoading}
        variant="primary"
        type={'submit'}
        data-testid="button-ok"
      >
        <span>{activeStep < 2 ? 'Avançar' : 'Finalizar'}</span>
        {activeStep < 2 ? <S.ChevronRightIcon /> : <S.CheckIcon />}
      </Button>
    </S.ActionsButtons>
  )
}
