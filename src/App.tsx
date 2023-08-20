import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AnimationRoutes } from '&utils/AnimationRoutes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { MainLayout } from '&components/Layout/Layout'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <AnimationRoutes />
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
      </MainLayout>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </ThemeProvider>
  )
}
