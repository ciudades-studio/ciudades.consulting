import ServiceImgDigitalProducts from '../assets/services-assets/digital_products_development.svg'
import ServiceImgIot from '../assets/services-assets/iot_development.svg'
import ServiceImgCloudInfrestructure from '../assets/services-assets/cloud_Infrastructure.svg'


export interface IService {
  serviceTitle: string
  serviceSubTitle: string
  itemsDescription: string[]
  ImgServiceSvg: string
}

const digitalProducts = {
  serviceTitle: "Digital Products Development",
  serviceSubTitle: "From strategy to implementation",
  itemsDescription: [
    "Research & technical scoping",
    "Assistance on building faster with low-code and no-code solutions",
    "API's integrations and web development",
    "Headless oriented development"
  ],
  ImgServiceSvg: ServiceImgDigitalProducts
}

const cloudAndArchitecture = {
  serviceTitle: "Cloud Infrastructure & Software Architecture",
  serviceSubTitle: "Robust and reliable solutions for your services",
  itemsDescription: [
    "We help deploying and developing on AWS and Azure",
    "Backend development",
    "Data migrations & pipelines"
  ],
  ImgServiceSvg: ServiceImgCloudInfrestructure
}

export default [ digitalProducts, cloudAndArchitecture ];
