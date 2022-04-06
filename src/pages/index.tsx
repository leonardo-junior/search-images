// vendors
import Head from 'next/head'

// components
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../components/Home"

// styles
import styles from "../styles/index.module.scss"

function HomePage (): JSX.Element {
  return (
    <>
      <Head>
        <title>Search images</title>
        <meta name="description" content='Site para pesquisa de imagens' />
      </Head>

      <div className={styles.container}>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default HomePage