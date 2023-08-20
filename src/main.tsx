import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { GlobalStyle } from './styles/globalStyle.ts'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
// if (process.env.NODE_ENV === 'test') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
