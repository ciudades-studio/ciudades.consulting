import parse from "html-react-parser";
import marked from "marked";
import { IService } from "../../fixtures/services.fixture";
import styles from "./srvices.module.scss";

const Services = ({ title, text }: IService) => {

  const descriptionParsed = parse(marked(text || ""));

  return (
    <div className={styles.services}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["services-wrapper"]}>
          <div className={styles["services-title-wrapper"]}>
            <h2 className={styles["services-title"]}>
              <span className={styles["services-title-span"]}>
                \\ {title}
              </span>
            </h2>
          </div>
          <div className={styles["services-text-wrapper"]}>
            <p className={styles["services-text"]}>
              {descriptionParsed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;