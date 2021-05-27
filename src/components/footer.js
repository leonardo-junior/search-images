function Footer () {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">Zigh Tech Ltda. 2021-{date}</footer>
  );
}
export default Footer;
