export type TTitle = {
  name: string
  key: string
  onClick?: {
    fn: () => void
    ascIcon?: boolean
  }
}

export type TData = { [x: string]: any }
