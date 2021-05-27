import lupa from "../images/lupa-search.png";

function Insert(props) {
  return (
    <section className="insert">
      <header>
        Pesquise suas imagens, serão carregadas imagens reduzidas, para imagem
        completa clique na imagem.
      </header>
      <div>
        <input
          type="text"
          placeholder="Insira palavra"
          onChange={props.change}
        />
        <button onClick={props.click}>
          <img src={lupa} alt="search" />
        </button>
      </div>
    </section>
  );
}

export default Insert;
