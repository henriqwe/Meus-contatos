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
      >
        {activeStep === 0 ? (
          <S.XMarkIcon style={{ height: '1rem' }} />
        ) : (
          <S.ChevronLeftIcon style={{ height: '1rem' }} />
        )}
        <span>{activeStep === 0 ? 'Cancelar' : 'Voltar'}</span>
      </Button>
      <Button disabled={isLoading} variant="primary" type={'submit'}>
        <span>{activeStep < 2 ? 'Avançar' : 'Finalizar'}</span>
        {activeStep < 2 ? (
          <S.ChevronRightIcon style={{ height: '1rem' }} />
        ) : (
          <S.CheckIcon style={{ height: '1rem' }} />
        )}
      </Button>
    </S.ActionsButtons>
  )
}
