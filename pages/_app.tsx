import '@fontsource/roboto'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import theme from '../components/theme'

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        jssStyles?.parentElement?.removeChild(jssStyles)
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>CrowFX</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseLine />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    )
}
export default MyApp
