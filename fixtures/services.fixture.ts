/* eslint-disable import/no-anonymous-default-export */

export type ServicePattern = "lines" | "dots-buildings";

export interface IService {
  title: string
  text: string
  pattern?: ServicePattern
}

const product = {
  title: "Services",
  text: "**Product**\n\nWe listen to your current needs, pain points during operations and highlights when it comes to processes.\n\nFrom idea to roadmap, from MVP to launch.",
  pattern: "lines" as ServicePattern
}

const software = {
  title: "Software",
  text: "**Applications and digital products**\n\nWe pick high quality and industry ready technologies according to each project and team.\n\nBoth consulting on architecture & best practices and projects get done.",
  pattern: "lines" as ServicePattern
}

const cloud = {
  title: "Cloud",
  text: "**Solutions and services AWS**\n\nAzure and sometimes GCP our choices.\n\nArchitecture best practices and costs saving our aim.\n\nData storage and migrations, tasks & processes scheduling, batching and workflows.\n\nWe enjoy it.",
  pattern: "dots-buildings" as ServicePattern
}

export default [ product, software, cloud ]
