export interface IIndustries {
  industriesTitle: string
  industriesDescription: string
  industrieImgUrl: string
}

const healthCare = {
  industriesTitle: "Health Care",
  industriesDescription: `Privacy and data protection standards, 
  user authentication and authorization, 
  mass notifications and IoT data 
  engineering.
  
  We’ve been there.`,
  industrieImgUrl: "/../assets/industries-assets/industries01.png"
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
  industrieImgUrl: "/../assets/industries02.png"
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
  industrieImgUrl: "/../assets/industries03.png"
}

export default [ healthCare, contentNmedia, retail ];