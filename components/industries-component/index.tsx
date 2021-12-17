import { IIndustries } from '../../fixtures/industries.fixture'
import Image from 'next/image'
import styles from './industries.module.scss'
import IndustrieServiceExample from '../../assets/industries-assets/industries01.png'

const Industrie = ({ industriesTitle, industriesDescription }: IIndustries) => {
  return (
    <div className={styles.container}>
      <figure className={styles["industries-image-container"]}>
        <Image 
          width={"332px"} 
          height={"500px"} 
          alt='example image'
          src={IndustrieServiceExample} 
          className={styles["industries-img"]}
        />
      </figure>
      <div className={styles["industries-text-container"]}>
        <h2 className={styles["industries-text-title"]}>{industriesTitle}</h2>
        <p className={styles["industries-text-description"]}>{industriesDescription}</p>
      </div>
    </div>
  );
}

export default Industrie;