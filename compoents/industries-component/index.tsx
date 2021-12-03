import { IIndustries } from '../../fixtures/industries.fixture'
import styles from './industries.module.scss'
 
const Industries = ({ industriesTitle, industriesDescription, industrieImgUrl }: IIndustries) => {
  return (
    <div className={styles["industries-container"]}>
      <div className={styles.container}>
        <div className={styles["industries-content-container"]}>
          <h1>{industriesTitle}</h1>
          <p>{industriesDescription}</p>
        </div>
        <figure>
          <img src={industrieImgUrl} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Industries;
