import { IIndustries } from '../../fixtures/industries.fixture'
import Image from 'next/image'
import styles from './industries.module.scss'

const Industries = ({ industriesTitle, industriesDescription, IndustrieImg }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <figure className={styles["industries-image-container"]}>
          <Image src={IndustrieImg} width={400} height={500} alt='example image' />
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