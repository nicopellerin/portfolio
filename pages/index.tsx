import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Navigation/Footer'
import Courses from '../components/Courses'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Nico Pellerin</title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
