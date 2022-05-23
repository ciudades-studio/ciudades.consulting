// ts-igonre
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

// Components
import Header from '../components/header'
import Hero from '../components/hero/index'
import AboutUs from '../components/about-us'
import ContactUs from '../components/contact-us'

// Content components
import heroContent from '../fixtures/hero.fixtures'
import aboutUsContent from '../fixtures/about-us-fixture'
import contactUsContent from '../fixtures/contact-us.fixture'
import ServicesSection from '../components/services-section'
import IndustriesSection from '../components/industries-section'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Consulting for cloud and software engineering tailored to your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...heroContent}/>
      <IndustriesSection />
      <ServicesSection />
      <AboutUs {...aboutUsContent} />
    </div>
  )
}

export default Home
