// vendors
import { VscChromeClose } from 'react-icons/vsc'

// styles
import styles from "../styles/Modal.module.scss";

function Modal({ modalImage, close }) {
  return (
    <div className={styles.modal}>
      <img src={modalImage} alt="imagem completa" />

      <button onClick={close}><VscChromeClose /></button>
    </div>
  )
}

export default Modal
