import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IdProvider } from '&contexts/useId'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AnimationRoutes } from '&utils/AnimationRoutes'

export default function App() {
  return (
    <IdProvider>
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
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </IdProvider>
  )
}
