import { ReactNode } from 'react'
import styled from 'styled-components'

interface props {
  children: ReactNode
}
export function MainLayout({ children }: props) {
  return <Layout>{children}</Layout>
}
const Layout = styled.main`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  overflow: none;
  justify-items: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  @media (min-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (min-width: 1200px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`
