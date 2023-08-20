// for media query
const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

// for passing of custom value
const customValue = (val: number) => `${val}px`

interface IMediaQueriesBreakpoints {
  custom: (maxNumber: number) => string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200)
}

const colors = {
  black: '#000',
  white: '#fff',
  primary: {
    700: '#18a2f3',
    800: '#2496d8'
  },
  danger: {
    700: '#C01E2E',
    800: '#ad202c'
  },
  success: {
    700: '#0A9444',
    800: '#0b823d'
  },
  secondary: {
    400: '#F1F5F9',
    700: '#e2e8f0',
    800: '#d1d6de'
  },
  slate: {
    600: '#808080',
    800: '#36313D'
  }
}

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue
}

const spacing = {
  xs: '10px',
  sm: '14px',
  md: '22px',
  custom: customValue
}

export const theme = {
  colors,
  spacing,
  fontSizes,
  media
}
