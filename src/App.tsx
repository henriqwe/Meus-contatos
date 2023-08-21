import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-loading-skeleton/dist/skeleton.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Outlet />
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
    </>
  )
}
