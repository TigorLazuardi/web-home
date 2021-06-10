import '@fontsource/roboto'
import CssBaseLine from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <CssBaseLine />
            <Component {...pageProps} />
        </React.Fragment>
    )
}
export default MyApp
