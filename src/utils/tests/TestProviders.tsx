import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface props {
  children: ReactNode
}
const queryClient = new QueryClient()

export function TestProviders({ children }: props) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <IdProvider>{children}</IdProvider> */}
      </QueryClientProvider>
    </BrowserRouter>
  )
}
