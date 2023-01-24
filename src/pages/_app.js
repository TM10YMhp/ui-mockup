import Head from 'next/head'
import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <Script src='/theme.js' strategy='beforeInteractive'/>
      <Component {...pageProps} />
    </>
  )
}
