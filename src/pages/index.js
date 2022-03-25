// vendors
import Head from 'next/head'

// components
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";

// styles
import style from "../styles/index.module.css";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Search images</title>
        <meta name="description" content='Site para pesquisa de imagens' />
      </Head>

      <div className={style.container}>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}
