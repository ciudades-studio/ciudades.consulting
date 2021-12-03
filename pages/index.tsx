import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

//Components
import Header from '../compoents/header'
import Hero from '../compoents/hero/index'

import industries from "../fixtures/industries.fixture"
import Industries from '../compoents/industries-component'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero 
        heroMainText={'We offer the best cloud solutions customized to your needs'} 
        heroText={'Become a leader in Software Development for IT and Cloud Solutions is our vission.'} 
      />
      {industries.map((industrie, index) => <Industries key={index} {...industrie} />)}
    </div>
  )
}

export default Home
