/* eslint-disable import/no-anonymous-default-export */

export interface IIndustry {
  imgUrl?: string
  title: string
  text: string
}

const healthCareIndustry = {
  imgUrl: "https://s3.us-west-2.amazonaws.com/noble.holdings.site/aguascalientes.jpeg",
  title: "Health Care",
  text: "Privacy and data protection standards, user authentication and authorization, mass notifications and IoT data engineering ...\n\nWe’ve been there.",
}

const retailIndustry = {
  imgUrl: "https://s3.us-west-2.amazonaws.com/noble.holdings.site/bucharest.jpeg",
  title: "Retail",
  text: "From idea & budget to converting sales.\n\nUsing the best services and technologies, our clients have got solutions that scale the promotion of goods and services and inventory management for digital and brick and mortar stores.\n\nThen we help getting insights for enhancing operations and customer acquisition using their data.",
}

const contentAndMediaIndustry = {
  imgUrl: "https://s3.us-west-2.amazonaws.com/noble.holdings.site/berlin.jpeg",
  title: "Content & Media",
  text: "Our expertise on AWS and a realm of web development knowledge have been getting applications up and running for hundreds of thousands of users.\n\nComcast, Audible and Medio Tiempo have been part of our challenges and great experiences.",
}

export default [ healthCareIndustry, contentAndMediaIndustry, retailIndustry ]