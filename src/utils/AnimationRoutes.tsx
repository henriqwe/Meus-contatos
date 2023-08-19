import { Routes, Route, LoaderFunction, ActionFunction } from 'react-router-dom'
import { IRoute, Pages } from '../types/routes'
import { AnimatePresence } from 'framer-motion'

const pages: Pages = import.meta.glob('../pages/**/*.tsx', { eager: true })

const _routes: IRoute[] = []
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '')

  _routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary
  })
}

export function AnimationRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        {_routes.map(({ Element, path, ...rest }) => (
          <Route element={<Element />} path={path} key={path} {...rest}></Route>
        ))}
      </Routes>
    </AnimatePresence>
  )
}
