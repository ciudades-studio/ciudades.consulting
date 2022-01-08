import ServiceImgDigitalProducts from '../assets/services-assets/digital_products_development.svg'
import ServiceImgIot from '../assets/services-assets/iot_development.svg'
import ServiceImgCloudInfrestructure from '../assets/services-assets/cloud_Infrastructure.svg'


export interface IService {
  serviceTitle: string
  serviceSubTitle: string
  itemsDercription: string[]
  ImgServiceSvg: string
}

const digitalProducts = {
  serviceTitle: "Digital Products Development",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  ImgServiceSvg: ServiceImgDigitalProducts
}

const iotDevelopment = {
  serviceTitle: "IoT Development",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  ImgServiceSvg: ServiceImgIot
}

const cloudAndArchitecture = {
  serviceTitle: "Cloud Infrastructure & Software Architecture",
  serviceSubTitle: "We approach your project from strategies to implementation.",
  itemsDercription: [
    "Generate and publish attractive content to your market audiences.",
    "Become publicly available on the Internet, reaching and engaging with your clients.",
    "Be found at Google."
  ],
  ImgServiceSvg: ServiceImgCloudInfrestructure
}

export default [ digitalProducts, iotDevelopment, cloudAndArchitecture ];
