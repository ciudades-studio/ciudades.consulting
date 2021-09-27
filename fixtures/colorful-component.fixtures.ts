/* eslint-disable import/no-anonymous-default-export */
type Color = "blue" | "green" | "yellow";
export interface IColorfulComponent {
  title: string
  backgroundColor: Color
}

const blue = {
  title: "Cambio de tema A",
  backgroundColor: "blue" as Color
}

const green = {
  title: "Cambio de tema B",
  backgroundColor: "green" as Color
}

const yellow = {
  title: "Cambio de tema C",
  backgroundColor: "yellow" as Color
}

export default [ blue, green, yellow ]
