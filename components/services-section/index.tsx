import Service from "../service-component";
import styles from "./services-section.module.scss"
import servicesFixtures from '../../fixtures/services.fixtures';


const ServicesSection = () => {
  return <div className={styles["services-main-container"]}>
    {servicesFixtures.map((service, index) => <Service key={index} {...service} />)}
  </div>
}

export default ServicesSection;
