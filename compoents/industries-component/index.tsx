import { IIndustries } from '../../fixtures/industries.fixture'
import styles from './industries.module.scss'
 
const Industries = ({ industriesTitle, industriesDescription, industrieImgUrl }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <figure className={styles["industries-image-container"]}>
          <img src={industrieImgUrl} alt="image" />
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