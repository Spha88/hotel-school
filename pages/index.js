import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prevanance HS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.netslate.co.za/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Spha
        </a>
      </footer>
    </div>
  )
}
