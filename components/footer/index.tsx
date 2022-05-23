import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className={styles.footer}>
        <div>
          <span>{`Ciudades LLC ${new Date().getFullYear()}`}</span>
        </div>
        <div>
          <span>30 N Gould St Sheridan, WY 82801</span>
        </div>
        <div>
          <span>+1 (415) 851-6951</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;