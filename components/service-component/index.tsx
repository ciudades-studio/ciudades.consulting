import { IService } from '../../fixtures/services.fixtures'
import dynamic from 'next/dynamic'
import styles from './service.module.scss'

const Service = ({ serviceTitle, serviceSubTitle, itemsDercription, imgServiceUrl }: IService) => {

  const SVG = dynamic(() => import('../../assets/services-assets/color_x5F_0.svg'))
  console.log("render", serviceTitle);

  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <figure className={styles["services-img-container"]}>
          {SVG && <SVG />}
        </figure>
        <div className={styles["services-text-container"]}>
          <h1 className={styles["services-title"]}>
            {serviceTitle}
          </h1>
          <h3 className={styles["services-subtitle"]}>
            {serviceSubTitle}
          </h3>
          <ul className={styles["services-items"]}>
            {itemsDercription.map((item, index) => (
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
