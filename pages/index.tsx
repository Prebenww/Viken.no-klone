import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Viken Fylkeskomune</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Nav/>

      <Footer/>
    </div>
  )
}

export default Home
