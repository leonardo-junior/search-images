import style from "../styles/insert.module.css";

function Insert(props) {
  return (
    <section className={style.insert}>
      <header>
        Pesquise suas imagens, serão carregadas imagens reduzidas. Para versão
        completa clique na imagem.
      </header>
      <form onSubmit={props.click}>
        <input type="text" placeholder="Pesquisar" onChange={props.change} />
        <input type="submit" value="pesquisar" />
      </form>
    </section>
  );
}

export default Insert;
