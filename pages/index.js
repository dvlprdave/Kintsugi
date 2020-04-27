import Head from 'next/head'
import { SWRConfig } from 'swr'
import fetcher from '../helpers/fetcher'

import TrendingAnime from '../components/TopAnimeContainer'
import Navbar from './../components/Navbar'
import PopularAnime from './../components/TopAnime/Popular';

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
    </SWRConfig>
  </div>
)

export default Home