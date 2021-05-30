import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";

import style from "../styles/index.module.css";

export default function HomePage() {
  return (
    <div className={style.index}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
