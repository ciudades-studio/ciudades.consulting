import Head from "next/head";
import React from "react";
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import styles from "../styles/page-styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
    </div>
  )
}
