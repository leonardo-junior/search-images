// styles
import style from "../styles/insert.module.css"

function Insert({ onSubmit, onChange }) {
  return (
    <section className={style.insert}>
      <header>
        Pesquise suas imagens, serão carregadas imagens reduzidas. Para versão
        completa clique na imagem.
      </header>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Pesquisar" onChange={onChange} />
        <input type="submit" value="pesquisar" />
      </form>
    </section>
  )
}

export default Insert
