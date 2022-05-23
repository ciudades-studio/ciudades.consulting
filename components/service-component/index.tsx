import { IService } from '../../fixtures/services.fixtures'
import styles from './service.module.scss'

const Service = ({ serviceTitle, serviceSubTitle, itemsDescription, ImgServiceSvg }: IService) => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <figure className={styles["services-img-container"]}>
          <ImgServiceSvg />
        </figure>
        <div className={styles["services-text-container"]}>
          <h1 className={styles["services-title"] }>
            {serviceTitle}
          </h1>
          <h3 className={styles["services-subtitle"] + " font-serif"}>
            {serviceSubTitle}
          </h3>
          <ul className={styles["services-items"]}>
            {itemsDescription.map((item, index) => (
              <li className={styles["service-item"]} key={index}>
                {item}
              </li>))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
