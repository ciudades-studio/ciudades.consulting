import parse from "html-react-parser";
import marked from "marked";
import cn from "classnames";
import { IService, ServicePattern } from "../../fixtures/services.fixture";
import styles from "./services.module.scss";

const TitleSection = ({ title }) => (
  <div className={styles["services-title-wrapper"]}>
    <h2 className={styles["services-title"]}>
      <span className={styles["services-title-span"]}>
        \\ {title}
      </span>
    </h2>
  </div>
);

const ContentSection = ({ text }) => {
  const descriptionParsed = parse(marked(text || ""));
  return (
    <div className={styles["services-text-wrapper"]}>
      <div className={styles["services-text"]}>
        {descriptionParsed}
      </div>
    </div>
  );
}

const Service = ({ title, text, pattern }: IService) => {

  const linesClass = styles["lines"];
  const buildingsClass = styles["dots-buildings"];
  const servicesClass = styles["services"];
  const hasLinesPattern = pattern === "lines";
  const hasBuildingsBg = pattern === "dots-buildings";
  const classes = cn(servicesClass, { [linesClass]: hasLinesPattern }, { [buildingsClass]: hasBuildingsBg });

  return (
    <div className={classes}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["services-wrapper"]}>
          <TitleSection title={title} />
          <ContentSection text={text} />
        </div>
      </div>
    </div>
  );
}

export default Service;