function Modal (props) {
  return (
    <div className="modal">
      <img
        src={props.modalImage}
        alt="img-complete-version"
      />
      <button onClick={props.close}>X</button>
    </div>
  );
}

export default Modal;