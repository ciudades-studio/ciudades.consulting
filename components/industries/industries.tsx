import styles from "./industries.module.scss";

export default function Industries() {
  return (
    <div className={styles["industries-wrapper"]}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["industries-grid"]}>
          <picture className={styles["industries-img-wrapper"]}>
            Image
          </picture>
          <div className={styles["industries-text-wrapp"]}>
            <div className={styles["industries-text-wrapper"]}>
              <div className={styles["industires-heading-wrapp"]}>
                <h2 className={styles["industires-heading-text"]}>
                  Healt Care
                </h2>
              </div>
              <div className={styles["industries-text"]}>
                <p className={styles["text"]}>
                  Privacy and data protection standards, user authentication and authorization, mass notifications and IoT data engineering ...
                </p>
                <p>We’ve been there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}