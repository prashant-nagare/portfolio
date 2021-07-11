import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Prashant Nagare - Software Developer" />
          <meta name="description" content="Hey there, This is Prashant Nagare aka reaperg0d. I am a software developer. I work on Cross-Platform Apps, Linux and Scripts." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Prashant Nagare - Software Developer" />
          <meta property="og:description" content="Hey there, This is Prashant Nagare aka Reaperg0d. I am the founder of PowerPC. I work on Linux, Cross-Platform Apps and Web-Development." />
          <meta property="og:image" content="https://www.vipuljha.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Prashant Nagare" />
          <meta property="twitter:description" content="Hey there, This is Prashant Nagare aka reaperg0d. I am a software developer at Cognizant. I work on Apps, Kernels, ROMs, and Scripts." />
          <meta property="twitter:image" content="https://www.vipuljha.com/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
