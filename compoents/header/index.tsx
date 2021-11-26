import styles from './header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles["big-screen-contanier"]}>
          header
        </div>  
      </div>
    </header>
  );
}
 
export default Header;