import { IServices } from '../../fixtures/services.fixtures'
import styles from './services.module.scss'
 
const Services = ({ serviceTitle, serviceSubTitle, itemsDercription }: IServices) => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <div className={styles["services-text-container"]}>
          <h1 className={styles["services-title"]}>
            {serviceTitle}
          </h1>
          <h3 className={styles["services-subtitle"]}>
            {serviceSubTitle}
          </h3>
          <ul className={styles["services-items"]}>
            {itemsDercription.map(item => (
              <li className={styles["service-item"]}>
                {item}
              </li>))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Services;