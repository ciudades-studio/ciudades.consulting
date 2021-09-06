import Head from "next/head";
import React from "react";
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import { IServices } from "../fixtures/services.fixture";

const servText = "We listen to your current needs, pain points during operations and highlights when it comes to processes. From idea to roadmap, from MVP to launch."

export default function Home({ title, text = servText }: IServices) {
  return (
    <div>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services title={title} text={text} />
    </div>
  )
}