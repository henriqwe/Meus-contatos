import { LoaderFunction, ActionFunction } from 'react-router-dom'

export interface RouteCommon {
  loader?: LoaderFunction
  action?: ActionFunction
  ErrorBoundary?: React.ComponentType<any>
}
export interface IRoute extends RouteCommon {
  path: string
  Element: React.ComponentType<any>
}
export interface Pages {
  [key: string]: {
    default: React.ComponentType<any>
  } & RouteCommon
}
