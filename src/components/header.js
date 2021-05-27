import lupa from "../images/lupa.svg";

function Header() {
  return (
    <div className="header">
      <div>
        <a href="/">
          <img src={lupa} alt="logo" />
        </a>
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
