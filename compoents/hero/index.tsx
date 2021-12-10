import { IHero } from '../../fixtures/hero.fixtures'
import styles from './hero.module.scss'
 
export const HetoTextContainer = ({ heroMainText, heroText }: IHero) => {
  return (
    <div className={styles["hero-text-container"]}>
      <h1 className={styles["hero-main-text"]}>
        {heroMainText}
      </h1>
      <h2 className={styles["hero-text"]}>
        {heroText}
      </h2>
    </div>
  );
}

export const HeroButtons = () => {
  return (
    <div className={styles["hero-button-container"]}>
      <button className={styles["hero-button-contact"]}>
        <a href="/">Contact</a>
      </button>
      <button className={styles["hero-button-service"]}>
        <a href="/">Services</a>
      </button>
    </div>
  );
}

const Hero = ({ heroMainText, heroText }: IHero) => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles.container}>
        <div className={styles["hero-content"]}>
          <HetoTextContainer 
            heroText={heroText} 
            heroMainText={heroMainText} 
          />
          <HeroButtons />
        </div>
      </div>
    </div>
  );
}

export default Hero