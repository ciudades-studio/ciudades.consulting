export interface IHero {
  heroMainText: { text: string, underline?: boolean }[]
  heroText: string
}

export interface IHeroTxtItem {
  text: string
  underline?: boolean
}

const heroContent = {
  heroMainText: [
    { text: "We offer the best" },
    { underline: true, text: "cloud solutions" }, 
    { text: "customized to your needs" }
  ],
  heroText: "Become a leader in Software Development for IT and Cloud Solutions is our vission.",
}

export default heroContent
