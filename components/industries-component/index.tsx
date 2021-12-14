import { IIndustries } from '../../fixtures/industries.fixture'
import Image from 'next/image'
import styles from './industries.module.scss'
import IndustrieServiceExample from '../../assets/industries-assets/industries01.png'

const Industries = ({ industriesTitle, industriesDescription }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <figure className={styles["industries-image-container"]}>
          <Image src={IndustrieServiceExample} width={"333px"} height={"239px"} alt='example image' />
        </figure>
        <div className={styles["industries-text-container"]}>
          <h1 className={styles["industries-text-title"]}>{industriesTitle}</h1>
          <p className={styles["industries-text-description"]}>{industriesDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;