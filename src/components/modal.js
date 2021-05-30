import style from "../styles/modal.module.css";

function Modal(props) {
  return (
    <div className={style.modal}>
      <img src={props.modalImage} alt="img-complete-version" />
      <button onClick={props.close}>X</button>
    </div>
  );
}

export default Modal;
