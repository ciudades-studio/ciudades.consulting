import { IConcept } from "../../fixtures/concept-component.fixture";
import styles from "./concept-component.module.scss";

const Concept = (props: Omit<IConcept, "bullets">) => {
  return (
    <div className={styles["concept-wrapper"]}>
      <h2 className={styles["concept"]}>\\ {props.concept}:</h2>
    </div>
  );
}

const Bullets = (props: Omit<IConcept, "concept">) => {
  return (
    <ul className={styles["bullets-wrapper"]}>
      {props.bullets.map((bullet, index) => <li key={index} className={styles["bullet"]}>{bullet}</li>)}
    </ul>
  );
}

const ConceptComponent = ({ concept, bullets }: IConcept) => {
  return (
    <div className={styles["concept-grid"]}>
      <Concept concept={concept} />
      <Bullets bullets={bullets}  />
    </div>
  );
}

export default ConceptComponent;
