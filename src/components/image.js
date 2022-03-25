// styles
import style from "../styles/image.module.css"

function Image({showImage, click}) {
  return (
    <img
      className={style.image}
      src={showImage}
      alt="imagem não disponível"
      onClick={click}
    />
  )
}

export default Image
