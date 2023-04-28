import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import background from '../styles/background.module.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <title>zhiyan114's Survey Response</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#00FFFF" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://ela.zhiyan114.com/"/>
      <meta property="og:site_name" content="ELA Survey - zhiyan114"/>
      <meta property="og:title" content="Home Page" key="title"/>
      <meta property="og:description" content="Mini-Research Project for ELA Class" key="mainDesc"/>
      <meta name="description" content="Mini-Research Project for ELA Class" key="altDesc"/>
    </Head>
    <div className={`${background.context}`}>
      <Component {...pageProps} />
    </div>
    <div className={background.area}>
      <ul className={background.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    
  </Fragment>
}
