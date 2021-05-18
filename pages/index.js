import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infinite Scroll</title>
        <meta name="description" content="Infinite Scroll with react query" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Infinite Scroll
        </h1>
      </main>
    </div>
  )
}
