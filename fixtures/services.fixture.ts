/* eslint-disable import/no-anonymous-default-export */
export interface IService {
  title: string
  text: string
}

const product = {
  title: "Services",
  text: "**Product**\n\nWe listen to your current needs, pain points during operations and highlights when it comes to processes.\n\nFrom idea to roadmap, from MVP to launch.",
}

const software = {
  title: "Software",
  text: "**Applications and digital products**\n\nWe pick high quality and industry ready technologies according to each project and team.\n\nBoth consulting on architecture & best practices and projects get done.",
}

const cloud = {
  title: "Cloud",
  text: "**Solutions and services AWS**\n\nAzure and sometimes GCP our choices.\n\nArchitecture best practices and costs saving our aim.\n\nData storage and migrations, tasks & processes scheduling, batching and workflows.\n\nWe enjoy it.",
}

export default [ product, software, cloud ]
