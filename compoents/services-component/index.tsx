import { IServices } from '../../fixtures/services.fixtures'
import Image from 'next/image'
import styles from './services.module.scss'

import ImageTry from '../../assets/services-assets/color_x5F_0.svg'

const Services = ({ serviceTitle, serviceSubTitle, itemsDercription }: IServices) => {

  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <figure className={styles["services-img-container"]}>
          <ImageTry />
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

export default Services;