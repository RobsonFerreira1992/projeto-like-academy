import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme from 'styles/theme'
import GlobalStyles from '../styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import config from '../config'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Match like academy</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Match like academy" />
        <meta name="version" content="1.0.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
