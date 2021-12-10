import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

// Components
import Header from '../compoents/header'
import ContactUs from '../compoents/contact-us'

// Content components
import contactUsContent from '../fixtures/contact-us.fixture' ;
import Hero from '../compoents/hero/index'
import Industries from '../compoents/industries-component'
import AboutUs from '../compoents/about-us'

// Content components
import heroContent from '../fixtures/hero.fixtures'
import industriesContent from '../fixtures/industries.fixture'
import aboutUsContent from '../fixtures/about-us-fixture'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero {...heroContent}/>
      {industriesContent.map((servindustrieContentice, index) => <Industries key={index} {...servindustrieContentice} />)}
      <AboutUs {...aboutUsContent} />
      <ContactUs {...contactUsContent} />
    </div>
  )
}

export default Home