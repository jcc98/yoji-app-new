import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import HomeScreen from '../components/HomeScreen'

const Home: NextPage = () => {

  return (
      <>
        <Head>
          <title>Kanji Yoji App</title>
          <meta name="description" content="Kanji Yoji App for Kanken practice" />
        </Head>
          <Nav/>
          <HomeScreen/>
      </>
  )
}

export default Home
