// types
import { ImageProps } from "../typings/search-images"

// styles
import styles from "../styles/Image.module.scss"

function Image ({ image, onClick }: ImageProps): JSX.Element {
  return (
    <img
      className={styles.image}
      src={image}
      alt="imagem não disponível"
      onClick={onClick}
    />
  )
}

export default Image
