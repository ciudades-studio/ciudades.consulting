import { IIndustries } from '../../fixtures/industries.fixture'
import Image from 'next/image'
import styles from './industries.module.scss'


const Industries = ({ industriesTitle, industriesDescription, industrieImgUrl }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <figure className={styles["industries-image-container"]}>
          <Image src={industrieImgUrl} alt="image" width={"333px"} height={"239px"} />
        </figure>
        <div className={styles["industries-text-container"]}>
          <h1>{industriesTitle}</h1>
          <p>{industriesDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;