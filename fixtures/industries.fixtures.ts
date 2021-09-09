/* eslint-disable import/no-anonymous-default-export */

export interface IIndustries {
  imgUrl?: string
  industriesTitle: string
  aboutText: string
  closingText: string
}

const industiresContent = {
  imgUrl: "https://s3.us-west-2.amazonaws.com/noble.holdings.site/aguascalientes.jpeg",
  industriesTitle: "Health Care",
  aboutText: "Privacy and data protection standards, user authentication and authorization, mass notifications and IoT data engineering ...",
  closingText: "We’ve been there."
}

export default [ industiresContent ]