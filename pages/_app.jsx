import React from 'react'
import Head from 'next/head'
import '../styles.css'

function MyApp({ Component, pageProps })
{
  return (
    <>
      <Head>
        <title>Kana Coach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;