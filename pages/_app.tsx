import { NextComponentType } from 'next'
import Head from 'next/head'

interface Props {
  Component: NextComponentType
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
