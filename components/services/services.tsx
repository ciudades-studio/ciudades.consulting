import styles from "./srvices.module.scss";
 
const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles["services-wrapper"]}>
        <div className={styles["services-title-wrapper"]}>
          <h2 className={styles["services-title"]}>\\ Services</h2>
        </div>
        <div className={styles["services-text-wrapper"]}>
          <p className={styles["services-text"]}>
            We listen to your current needs, pain points during 
            operations and highlights when it comes to processes.From 
            idea to roadmap, from MVP to launch.
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Services;