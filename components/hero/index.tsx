import { IHero, IHeroTxtItem } from '../../fixtures/hero.fixtures'
import styles from './hero.module.scss'
import Link from 'next/link'
 
export const HeroTextContainer = ({ heroMainText, heroText }: IHero) => {
  return (
    <div className={styles["hero-section-container"]}>
      <h1 className={styles["hero-main-text"]}>
        {heroMainText.map((item: IHeroTxtItem, index: number) => {
          if (item.underline)
            return <span className={styles.underline} key={index}>{item.text}</span>
          if (item.serif)
          return <span className={styles["serif-emphasis"] + " " + "font-serif" } key={index}>{item.text}</span>
          else
            return <span key={index}>{item.text}</span>
        })}
      </h1>
    </div>
  );
}

export const HeroButtons = () => {
  return (
    <div className={styles["hero-button-container"]}>
      <button className={styles["hero-button-contact"]}>
        <Link href="/">Contact</Link>
      </button>
      <button className={styles["hero-button-service"]}>
        <Link href="/">Services</Link>
      </button>
    </div>
  );
}

const Hero = ({ heroMainText, heroText }: IHero) => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles.container}>
        <div className={styles["hero-content"]}>
          <HeroTextContainer 
            heroText={heroText} 
            heroMainText={heroMainText} 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
