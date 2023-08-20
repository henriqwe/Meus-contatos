import * as S from './styles'
import { MapPin } from '&components/Icons/MapPin'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '&utils/routes'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export function FloatingActionButton() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { icon, position, show, title, pathTo } = handlepath(pathname)

  if (!show || !pathTo || !position) {
    return <></>
  }
  return (
    <S.FloatingActionButtonContainer
      title={title}
      onClick={() => navigate(pathTo)}
      position={position}
      data-testid={'floatingactionbutton-container'}
    >
      <S.WrapperIcon>{icon}</S.WrapperIcon>
    </S.FloatingActionButtonContainer>
  )
}

function handlepath(pathname: string) {
  let show = true
  const options: {
    [x: string]: {
      route: string
      position: 'right' | 'left'
      icon: JSX.Element
      title: string
      pathTo: string
    }
  } = {
    home: {
      route: routes.home.path,
      position: 'right',
      icon: (
        <S.IconWrapper>
          <MapPin />
        </S.IconWrapper>
      ),
      title: 'Ir para mapa',
      pathTo: routes.map.path
    },
    map: {
      route: routes.map.path,
      position: 'left',
      icon: (
        <S.IconWrapper>
          <ChevronLeftIcon />
        </S.IconWrapper>
      ),
      title: 'Ir para mapa',
      pathTo: routes.home.path
    }
  }

  const path = Object.values(options).find((path) => path.route === pathname)

  if (!path) {
    show = false
    return { show }
  }
  const { icon, position, title, pathTo } = path

  return { show, icon, position, title, pathTo }
}
