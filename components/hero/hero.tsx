import Logo from '../../assets/logo.svg';
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-logo-wrapper"]}>
        <Logo className={styles["hero-logo"]} />
      </div>
  </div>
  );
}
 
export default Hero;