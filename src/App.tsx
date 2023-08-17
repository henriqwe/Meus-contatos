import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  ActionFunction
} from 'react-router-dom'
import { ContactsProvider } from '&contexts/contactsContext'
interface RouteCommon {
  loader?: LoaderFunction
  action?: ActionFunction
  ErrorBoundary?: React.ComponentType<any>
}
interface IRoute extends RouteCommon {
  path: string
  Element: React.ComponentType<any>
}
interface Pages {
  [key: string]: {
    default: React.ComponentType<any>
  } & RouteCommon
}

const pages: Pages = import.meta.glob('./pages/**/*.tsx', { eager: true })

const routes: IRoute[] = []
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '')

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary
  })
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> })
  }))
)

const App = () => {
  return <RouterProvider router={router} />
}

export default function WrapperApp() {
  return (
    <ContactsProvider>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ContactsProvider>
  )
}
