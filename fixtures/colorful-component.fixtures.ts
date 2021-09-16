/* eslint-disable import/no-anonymous-default-export */

export type DifferentBgColor = "blueColor" | "greenColor" | "yellowColor";

export type bgColorTtitle = "blueColor" | "greenColor" | "yellowColor";

export interface IColorfullComponent {
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
  bgTitle: "blueColor" as bgColorTtitle,
  bgColor: "blueColor" as DifferentBgColor
}

const green = {
  textTitle: "Cambio de tema B",
  bgTitle: "greenColor" as DifferentBgColor,
  bgColor: "greenColor" as DifferentBgColor
}

const yellow = {
  textTitle: "Cambio de tema C",
  bgTitle: "yellowColor" as DifferentBgColor,
  bgColor: "yellowColor" as DifferentBgColor
}

export default [ blue, green, yellow ]