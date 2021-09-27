import cn from "classnames";
import styles from "./colorful-component.module.scss";
import { IColorfulComponent } from "../../fixtures/colorful-component.fixtures";

const ColorfulComponent = ({ title, backgroundColor }: IColorfulComponent) => {
  const getBackgroundColor = () => {
    const mainWrapper = styles["main-wrapper"];
    const classes = cn(mainWrapper, styles[backgroundColor]);
    return classes;
  }

  return (
    <div className={getBackgroundColor()}>
      <h2 className={styles["text-wrapper"]}>{title}</h2>
    </div>
  );
}

export default ColorfulComponent;
