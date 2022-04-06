// vendors
import { FiSearch } from 'react-icons/fi'

// styles
import styles from "../styles/Search.module.scss"

function Search({ onSubmit, onChange }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button type="submit" value="pesquisar">
        <FiSearch/>
      </button>
      <input type="text" placeholder="Pesquisar imagens" onChange={onChange} />
    </form>
  )
}

export default Search
