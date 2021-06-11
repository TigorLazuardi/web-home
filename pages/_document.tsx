/**
 * Material UI needs special handling so it doesn't give errors on clients when rendering.
 * Copy pasted with modification from "https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js"
 */

import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import theme from '../components/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    }
}
