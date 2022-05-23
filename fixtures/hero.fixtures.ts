export interface IHero {
  heroMainText: { text: string, underline?: boolean }[]
  heroText?: string
}

export interface IHeroTxtItem {
  text: string
  underline?: boolean,
  serif?: boolean
}

const heroContent = {
  heroMainText: [
    { text: "Consulting & technical lead" },
    { underline: true, text: "for cloud and software engineering" }, 
    { text: "tailored to your needs", serif: true }
  ]
}

export default heroContent
