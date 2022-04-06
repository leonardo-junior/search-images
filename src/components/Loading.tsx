// styles
import styles from "../styles/Loading.module.scss"

function Loading (): JSX.Element {
  return (
    <div className={styles.loading}>
      <img src="loader.gif" alt="carregando imagem" />
    </div>
  )
}

export default Loading
