/* eslint-disable import/no-anonymous-default-export */

export type DifferentBgColor = "blue-color" | "green-color" | "yellow-color";

export type bgColorTtitle = "blue-color" | "green-color" | "yellow-color";

export interface IColorfulComponent {
  textTitle: string
  bgColor?: DifferentBgColor
  bgTitle?: bgColorTtitle
}

export interface IService {
  title: string
  text: string
}

const blue = {
  textTitle: "Cambio de tema A",
  bgTitle: "blue-color" as bgColorTtitle,
  bgColor: "blue-color" as DifferentBgColor
}

const green = {
  textTitle: "Cambio de tema B",
  bgTitle: "green-color" as DifferentBgColor,
  bgColor: "green-color" as DifferentBgColor
}

const yellow = {
  textTitle: "Cambio de tema C",
  bgTitle: "yellow-color" as DifferentBgColor,
  bgColor: "yellow-color" as DifferentBgColor
}

export default [ blue, green, yellow ]