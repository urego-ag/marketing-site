import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>UREGO</title>
          <meta name="description" content="UREGO" />
        </Head>
      <body>
        <div className={styles.bgimg}>
          <div className={styles.topcentre}>
            <img className={styles.logo} alt="Urego logo" src="/images/UREGO_logo_white_claim_RGB.svg"  />
          </div>
          <div className={styles.middle}>
            <h1>COMING SOON</h1>
          </div>
          <div className={styles.bottomleft}>
            <p>&copy;2021 Urego AG</p>
          </div>
        </div>
      </body>
    </>
  )
}
