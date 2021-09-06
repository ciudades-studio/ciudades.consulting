import { IServices } from "../../fixtures/services.fixture";
import styles from "./srvices.module.scss";
 
const Services = ({ title="Services" }: IServices) => {
  return (
    <div className={styles.services}>
      <div className={styles["services-wrapper"]}>
        <div className={styles["services-title-wrapper"]}>
          <h2 className={styles["services-title"]}>
            <span className={styles["services-title-span"]}>\\ {title}</span>
          </h2>
        </div>
        <div className={styles["services-text-wrapper"]}>
          <p className={styles["services-text"]}>
            We listen to your current needs, pain points during operations
            and highlights when it comes to processes. From idea to roadmap, 
            from MVP to launch.
          </p>
        </div>
      </div>
      <div className={styles.patterns}>
        <div className={styles["second-patterns"]}/>
        <div className={styles["third-patterns"]}/>
      </div>
    </div>
  );
}
 
export default Services;