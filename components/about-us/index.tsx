import { IAboutUs } from '../../fixtures/about-us-fixture'
import styles from './about-us.module.scss'
import Image from 'next/image'
import bgItemOne from '../../assets/about-us-assets/item-one.png'
import bgItemTwo from '../../assets/about-us-assets/item-two.png'
import bgItemThree from '../../assets/about-us-assets/item-three.png'
import bgItemFour from '../../assets/about-us-assets/item-four.png'
import bgItemFive from '../../assets/about-us-assets/item-five.png'
import bgItemSix from '../../assets/about-us-assets/item-six.png'
import bgItemSeven from '../../assets/about-us-assets/item-seven.png'

const AboutUsBgItems = () => {
  return (
    <>
      <figure className={styles["container-item-one"]}>
        <Image src={bgItemOne} />
      </figure>
      <figure className={styles["container-item-two"]}>
        <Image src={bgItemTwo} />
      </figure>
      <figure className={styles["container-item-three"]}>
        <Image src={bgItemThree} />
      </figure>
      <figure className={styles["container-item-four"]}>
        <Image src={bgItemFour} />
      </figure>
      <figure className={styles["container-item-five"]}>
        <Image src={bgItemFive} />
      </figure>
      <figure className={styles["container-item-six"]}>
        <Image src={bgItemSix} />
      </figure>
      <figure className={styles["container-item-seven"]}>
        <Image src={bgItemSeven} />
      </figure>
    </>
  );
}

function AboutUs({ aboutUsTitle, aboutUsDescription }: IAboutUs): JSX.Element {
  return (
    <div className={styles["aboutus-container"]}>
      <div className={styles.container}>
        <div className={styles["aboutus-text-container"]}>
          <h2 className={styles["aboutus-title"]}>{aboutUsTitle}</h2>
          <p className={styles["aboutus-description"]}>{aboutUsDescription}</p>
        </div>
        <AboutUsBgItems />
      </div>
    </div>
  )
}
 
export default AboutUs;