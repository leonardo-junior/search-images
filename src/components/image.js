function Image(props) {
  return (
    <img
      className="image-searched"
      src={props.showImage}
      alt="imagem não disponível"
      onClick={props.click}
    />
  );
}

export default Image;
