import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Viken Fylkeskomune</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Navigation*/}
        <Nav/>

        {/*Hero*/}
        <Hero/>

      <Footer/>
    </div>
  )
}

export default Home
