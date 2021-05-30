import style from "../styles/header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div>
        <h1>SEARCH TECH</h1>
      </div>
      <h2>
        Site para pesquisa imagens de diferentes temas de forma dinâmica e
        prática
      </h2>
    </div>
  );
}

export default Header;
