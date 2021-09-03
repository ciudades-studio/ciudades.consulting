import { IServices } from "../../fixtures/services.fixture";
import styles from "./srvices.module.scss";
 
const Services = ({ title="Services", text }: IServices) => {
  return (
    <div className={styles.services}>
      <div className={styles["services-wrapper"]}>
        <div className={styles["services-title-wrapper"]}>
          <h2 className={styles["services-title"]}>\\ {title}</h2>
        </div>
        <div className={styles["services-text-wrapper"]}>
          <p className={styles["services-text"]}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Services;