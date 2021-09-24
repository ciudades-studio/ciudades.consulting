import cn from "classnames";
import styles from "./colorful-component.module.scss";
import colors from "../../fixtures/colorful-component.fixtures";
import { IColorfulComponent } from "../../fixtures/colorful-component.fixtures";

const ColorfulComponent = ({ textTitle, bgTitle, bgColor }: IColorfulComponent) => {
  const getBgColors = () => {
    const passColors = colors.map(() => styles[bgColor]);
    const mainWrapper = styles["main-wrapper"];
    const classes = cn(mainWrapper, passColors);
    return classes;
  }

  const getBgTitle = () => {
    const passColors = colors.map(() => styles[bgTitle]);
    const textWrapper = styles["text-wrapper"];
    const classes = cn(textWrapper, passColors);
    return classes;
  }

  return (
    <div className={getBgColors()}>
      <h2 className={getBgTitle()}>{textTitle}</h2>
    </div>
  );
}

export default ColorfulComponent;