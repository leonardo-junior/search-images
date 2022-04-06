// vendors
import { ChangeEvent, FormEvent } from 'react'
import { FiSearch } from 'react-icons/fi'

// styles
import styles from "../styles/Search.module.scss"

type SearchProps = {
  onSubmit: (event: FormEvent) => void
  onChange: (event:ChangeEvent<HTMLInputElement>) => void
}

function Search({ onSubmit, onChange }: SearchProps): JSX.Element {
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
