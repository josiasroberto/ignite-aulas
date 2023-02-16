import Head from 'next/head'

// import styles from '../styles/global.module.scss'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <h1 >
        HelloWorld
      </h1>

    </>
  )
}
