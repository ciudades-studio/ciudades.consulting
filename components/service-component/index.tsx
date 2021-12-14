import { IService } from '../../fixtures/services.fixtures'
import styles from './service.module.scss'
import Image from 'next/image'
import ServicesImageExample from '../../assets/services-assets/color_x5F_1.png'

const Service = ({ serviceTitle, serviceSubTitle, itemsDercription }: IService) => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <figure className={styles["services-img-container"]}>
          <Image src={ServicesImageExample} width={500} height={500} />
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