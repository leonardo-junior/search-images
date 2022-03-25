// vendors
import { VscChromeClose } from 'react-icons/vsc'

// styles
import style from "../styles/modal.module.css";

function Modal({ modalImage, close }) {
  return (
    <div className={style.modal}>
      <img src={modalImage} alt="imagem completa" />

      <button onClick={close}><VscChromeClose /></button>
    </div>
  )
}

export default Modal
