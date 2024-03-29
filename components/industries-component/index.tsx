import { IIndustries } from '../../fixtures/industries.fixture'
import Image from 'next/image'
import styles from './industries.module.scss'

export const IndustriesTitle = ({ title = '' }) => {
  return (
    <div className={styles['industries-title']}>
      <h2>{title}</h2>
    </div>
  )
}

const Industries = ({ industriesTitle, industriesDescription, IndustrieImg, imgHeight, imgWidth }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <figure className={styles["industries-image-container"]}>
          <Image src={IndustrieImg} width={imgWidth} height={imgHeight} alt='example image' />
        </figure>
        <div className={styles["industries-text-container"]}>
          <h1 className={styles["industries-text-title"] + " font-serif"}>{industriesTitle}</h1>
          <p className={styles["industries-text-description"]}>{industriesDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;
