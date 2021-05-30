import style from "../styles/loading.module.css";

function Loading() {
  return (
    <div className={style.loading}>
      <img src="loader.gif" alt="loading..." />
    </div>
  );
}

export default Loading;
