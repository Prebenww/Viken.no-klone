import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Article from "../components/Article";



const Home: NextPage = ({data}) => {

  return (
    <div >
      <Head>
        <title>Viken Fylkeskomune</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Navigation*/}
        <Nav/>

        {/*Hero*/}
        <Hero/>

        {/*Articles*/}
        <Article data={data} />
      <Footer/>
    </div>
  )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Home
