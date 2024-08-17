import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
