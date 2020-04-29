import Head from 'next/head'
import { SWRConfig } from 'swr'
import fetcher from '../helpers/fetcher'

import Navbar from './../components/Navbar'
import PopularAnime from './../components/TopAnime/PopularAnime';
import PopularFilms from '../components/TopAnime/PopularFilms'

const Home = () => (
  <div className="container">
    <Head>
      <title>Kintsugi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SWRConfig
      value={{ fetcher }}
    >
      <Navbar />
      <PopularAnime />
      <PopularFilms />
    </SWRConfig>
  </div>
)

export default Home