import style from "../styles/footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
  return <footer className={style.footer}>Zigh Tech Ltda. 2021-{date}</footer>;
}
export default Footer;
