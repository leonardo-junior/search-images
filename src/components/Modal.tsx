// vendors
import { VscChromeClose } from 'react-icons/vsc'

// types
import { ImageProps } from "../typings/search-images"

// styles
import styles from "../styles/Modal.module.scss";

function Modal ({ image, onClick }: ImageProps): JSX.Element {
  return (
    <div className={styles.modal}>
      <img src={image} alt="imagem completa" />

      <button onClick={onClick}><VscChromeClose /></button>
    </div>
  )
}

export default Modal
