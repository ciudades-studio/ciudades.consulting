export interface IService {
  serviceTitle: string
  serviceSubTitle: string
  itemsDercription: string[]
  imgServiceUrl: string
}

const digitalProducts = {
  serviceTitle: "Digital Products Development",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  imgServiceUrl: "/../../assets/services-assets/color_x5F_0.svg"
}

const iotDevelopment = {
  serviceTitle: "IoT Development",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  imgServiceUrl: "/../../assets/services-assets/color_x5F_1.svg"
}

const cloudAndArchitecture = {
  serviceTitle: "Cloud Infrastructure & Software Architecture",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  imgServiceUrl: "/../../assets/services-assets/color_x5F_2.svg"
}

export default [ digitalProducts, iotDevelopment, cloudAndArchitecture ];
