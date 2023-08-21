import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '&styles/globalStyle.ts'
import { routes } from '&utils/routes.ts'
import Home from '&pages/index'
import Map from '&pages/mapa'
import NewContact from '&pages/cadastrar'
import EditContact from '&pages/$id/editar'
import Contact from '&pages/$id'
import PageNotFound from '&pages/pagina-nao-encontrada'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainLayout } from '&components/Layout/Layout.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: routes.home.path,
        element: <Home />
      },
      {
        path: routes.viewContact.pathWithParam,
        element: <Contact />
      },
      {
        path: routes.map.path,
        element: <Map />
      },
      {
        path: routes.createContact.path,
        element: <NewContact />
      },
      {
        path: routes.editContact.pathWithParam,
        element: <EditContact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <RouterProvider router={router} />
        </MainLayout>
      </ThemeProvider>
      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>
)
