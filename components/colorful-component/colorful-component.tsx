import cn from "classnames";
import styles from "./colorful-component.module.scss";
import { IColorfulComponent } from "../../fixtures/colorful-component.fixtures";

const ColorfulComponent = ({ textTitle, bgTitle, bgColor }: IColorfulComponent) => {

  const getBgColors = () => {
    const blueBg = styles["blue-color"];
    const greenBg = styles["green-color"];
    const yellowBg = styles["yellow-color"];
    const mainWrapper = styles["main-wrapper"];
    const hasBgBlue = bgColor === "blue-color";
    const hasBgGreen = bgColor === "green-color";
    const hasBgYellow = bgColor === "yellow-color";
    const classes = cn(
      mainWrapper, 
      { [blueBg]: hasBgBlue }, 
      { [greenBg]: hasBgGreen }, 
      { [yellowBg]: hasBgYellow }
    );
    return classes;
  };

  const getBgTitle = () => {
    const blueBg = styles["blue-color"];
    const greenBg = styles["green-color"];
    const yellowBg = styles["yellow-color"];
    const textWrapper = styles["text-wrapper"];
    const hasBgBlue = bgTitle === "blue-color";
    const hasBgGreen = bgTitle === "green-color";
    const hasBgYellow = bgTitle === "yellow-color";
    const classes = cn(
      textWrapper, 
      { [blueBg]: hasBgBlue }, 
      { [greenBg]: hasBgGreen }, 
      { [yellowBg]: hasBgYellow }
    );
    return classes;
  };

  return (
    <div className={getBgColors()}>
      <h2 className={getBgTitle()}>{textTitle}</h2>
    </div>
  );
}

export default ColorfulComponent;