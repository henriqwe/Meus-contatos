import 'styled-components'

// importing the theme we created
import { theme } from './index'

// global typescript declaration for the theme

declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}
