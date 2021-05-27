import lupa from "../images/lupa-search.png";

function Insert(props) {
  return (
    <section className="insert">
      <header>
        Pesquise suas imagens, serão carregadas imagens reduzidas. Para imagem
        completa clique na imagem.
      </header>
      <div>
        <input type="text" placeholder="Pesquisar" onChange={props.change} />
        <button onClick={props.click}>
          <img src={lupa} alt="search" />
        </button>
      </div>
    </section>
  );
}

export default Insert;
