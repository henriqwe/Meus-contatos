import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { routes } from './routes'
import Home from '&pages/index'
import Map from '&pages/mapa'
import NewContact from '&pages/cadastrar'
import EditContact from '&pages/editar/$id'
import Contact from '&pages/contato/$id'
import PageNotFound from '&pages/pagina-nao-encontrada'

export function AnimationRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          element={<Home />}
          path={routes.home.path}
          key={routes.home.path}
        />
        <Route element={<Map />} path={routes.map.path} key={routes.map.path} />
        <Route
          element={<NewContact />}
          path={routes.createContact.path}
          key={routes.createContact.path}
        />
        <Route
          element={<EditContact />}
          path={routes.editContact.pathWithParam}
          key={routes.editContact.pathWithParam}
        />
        <Route
          element={<Contact />}
          path={routes.viewContact.pathWithParam}
          key={routes.viewContact.pathWithParam}
        />
        <Route
          element={<PageNotFound />}
          path={routes.pageNotFound.path}
          key={routes.pageNotFound.path}
        />
      </Routes>
    </AnimatePresence>
  )
}
