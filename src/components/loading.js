// styles
import styles from "../styles/Loading.module.css"

function Loading() {
  return (
    <div className={styles.loading}>
      <img src="loader.gif" alt="carregando imagem" />
    </div>
  )
}

export default Loading
