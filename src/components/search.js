// vendors
import { FiSearch } from 'react-icons/fi'

// styles
import style from "../styles/search.module.css"

function Search({ onSubmit, onChange }) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <button type="submit" value="pesquisar">
        <FiSearch/>
      </button>
      <input type="text" placeholder="Pesquisar imagens" onChange={onChange} />
    </form>
  )
}

export default Search