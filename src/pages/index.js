// components
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";

// styles
import style from "../styles/index.module.css";

export default function HomePage() {
  return (
    <div className={style.container}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
