import style from "../styles/image.module.css";

function Image(props) {
  return (
    <img
      className={style.image}
      src={props.showImage}
      alt="imagem não disponível"
      onClick={props.click}
    />
  );
}

export default Image;
