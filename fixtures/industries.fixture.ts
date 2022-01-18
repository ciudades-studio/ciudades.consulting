import ImgIndustries01 from '../assets/industries-assets/industries01.jpg'
import ImgIndustries02 from '../assets/industries-assets/industries02.jpg'
import ImgIndustries03 from '../assets/industries-assets/industries03.jpg'

export interface IIndustries {
  industriesTitle: string
  industriesDescription: string
  IndustrieImg: string | StaticImageData
  imgHeight: number
  imgWidth: number
}

const healthCare = {
  industriesTitle: "Health Care",
  industriesDescription: `Privacy and data protection standards, 
  user authentication and authorization, 
  mass notifications and IoT data 
  engineering.
  
  We’ve been there.`,
  IndustrieImg: ImgIndustries01,
  imgHeight: 500,
  imgWidth: 332,
}

const contentNmedia = {
  industriesTitle: "Content and Media",
  industriesDescription: `Our expertise on AWS and a realm of web 
  development knowledge have been 
  getting applications up and running for 
  hundreds of thousands of users.
  
  Comcast, Audible and Medio Tiempo have 
  been part of our challenges and great 
  experiences.`,
  IndustrieImg: ImgIndustries02,
  imgHeight: 500,
  imgWidth: 423,
}

const retail = {
  industriesTitle: "Retail",
  industriesDescription: `From idea & budget to converting sales.

  Using the best services and technologies, 
  our clients have got solutions that scale 
  the promotion of goods and services and 
  inventory management for digital and brick 
  and mortar stores.
  
  Then we help getting insights for enhancing 
  operations and customer acquisition
  using their data.`,
  IndustrieImg: ImgIndustries03,
  imgHeight: 420,
  imgWidth: 420,
}

export default [ healthCare, contentNmedia, retail ];
