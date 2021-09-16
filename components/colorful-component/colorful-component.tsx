import cn from "classnames";
import styles from "./colorful-component.module.scss";
import { IColorfullComponent } from "../../fixtures/colorful-component.fixtures";

const ColorfulComponent = ({ textTitle, bgTitle, bgColor }: IColorfullComponent) => {

  const getBgColors = () => {
    const blueBg = styles["blueColor"];
    const greenBg = styles["greenColor"];
    const yellowBg = styles["yellowColor"];
    const mainWrapper = styles["main-wrapper"];
    const hasBgBlue = bgColor === "blueColor";
    const hasBgGreen = bgColor === "greenColor";
    const hasBgYellow = bgColor === "yellowColor";
    const classes = cn(mainWrapper, { [blueBg]: hasBgBlue }, { [greenBg]: hasBgGreen }, { [yellowBg]: hasBgYellow });
    return classes;
  };

  const getBgTitle = () => {
    const blueBg = styles["blueColor"];
    const greenBg = styles["greenColor"];
    const yellowBg = styles["yellowColor"];
    const textWrapper = styles["text-wrapper"];
    const hasBgBlue = bgTitle === "blueColor";
    const hasBgGreen = bgTitle === "greenColor";
    const hasBgYellow = bgTitle === "yellowColor";
    const classes = cn(textWrapper, { [blueBg]: hasBgBlue }, { [greenBg]: hasBgGreen }, { [yellowBg]: hasBgYellow });
    return classes;
  };

  return (
    <div className={getBgColors()}>
      <h2 className={getBgTitle()}>{textTitle}</h2>
    </div>
  );
}

export default ColorfulComponent;