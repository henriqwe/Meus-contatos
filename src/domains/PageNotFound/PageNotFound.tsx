import { Button } from '&components/Button/Button'
import { CoffeeWithFriendsIllustrarion } from '&components/Illustrations/CoffeeWithFriendsIllustrarion/CoffeeWithFriendsIllustrarion'
import { routes } from '&utils/routes'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function PageNotFound() {
  const navigate = useNavigate()
  return (
    <S.Container data-testid={'container-page-not-found'}>
      <h3>Pagina Não encontrada</h3>
      <S.IllustrationWrapper>
        <CoffeeWithFriendsIllustrarion />
      </S.IllustrationWrapper>
      <Button
        variant="primary"
        data-testid={'button-page-not-found'}
        onClick={() => navigate(routes.home.path)}
      >
        Ir para Home
      </Button>
    </S.Container>
  )
}
