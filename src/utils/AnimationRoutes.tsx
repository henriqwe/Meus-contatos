import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { routes } from './routes'
import Home from '&pages/index'
import Mapa from '&pages/mapa'
import Cadatrar from '&pages/cadastrar'
import Editar from '&pages/editar/$id'
import Contato from '&pages/contato/$id'

export function AnimationRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          element={<Home />}
          path={routes.home.path}
          key={routes.home.path}
        />
        <Route
          element={<Mapa />}
          path={routes.map.path}
          key={routes.map.path}
        />
        <Route
          element={<Cadatrar />}
          path={routes.createContact.path}
          key={routes.createContact.path}
        />
        <Route
          element={<Editar />}
          path={routes.editContact.pathWithParam}
          key={routes.editContact.pathWithParam}
        />
        <Route
          element={<Contato />}
          path={routes.viewContact.pathWithParam}
          key={routes.viewContact.pathWithParam}
        />
      </Routes>
    </AnimatePresence>
  )
}
