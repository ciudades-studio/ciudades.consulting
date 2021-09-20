/* eslint-disable jsx-a11y/alt-text */
import { IHero } from "../../fixtures/hero.fixture";
import Logo from '../../assets/hero-logo.svg';
import styles from "./hero.module.scss";

const Hero = ({ title="Product & Software" }: IHero) => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-wrapper"]}>
        <div className={styles["hero-logo-container"]}>
          <div className={styles["hero-logo-wrapper"]}>
          <picture className={styles["story-img-wrapper"]}>
            <Logo className={styles["hero-logo"]} />
          </picture>
          </div>
        </div>
        <h1 className={styles["hero-title"]}>{title}</h1>
      </div>
  </div>
  );
}

export default Hero;