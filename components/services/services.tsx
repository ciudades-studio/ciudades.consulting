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

const Pattern = ({ pattern }: { pattern: ServicePattern} ) => {
  if (pattern === "lines") {
    return <div></div>
  }
  return null;
};

const Service = ({ title, text, pattern }: IService) => {

  const linesClass = styles["lines"];
  const servicesClass = styles["services"];
  const hasLinesPattern = pattern === "lines";
  const classes = cn(servicesClass, { [linesClass]: hasLinesPattern });
  return (
    <div className={classes}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["services-wrapper"]}>
          <TitleSection title={title} />
          <ContentSection text={text} />
        </div>
        {pattern && <Pattern pattern={pattern} />}
      </div>
    </div>
  );
}

export default Service;
