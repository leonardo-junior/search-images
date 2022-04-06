// styles
import styles from "../styles/Image.module.css"

function Image({showImage, click}) {
  return (
    <img
      className={styles.image}
      src={showImage}
      alt="imagem não disponível"
      onClick={click}
    />
  )
}

export default Image
