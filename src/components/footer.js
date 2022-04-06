// styles
import styles from "../styles/Footer.module.scss"

function Footer() {
  const date = new Date().getFullYear()
  return <footer className={styles.footer}>Zigh Tech Ltda. 2021-{date}</footer>
}

export default Footer
