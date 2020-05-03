import Head from 'next/head'
import { SWRConfig } from 'swr'
import fetcher from '../helpers/fetcher'

import PopularAnime from './../components/TopAnime/PopularAnime';
import PopularFilms from '../components/TopAnime/PopularFilms'

const Home = () => (
  <>
    <Head>
      <title>Kintsugi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SWRConfig
      value={{ fetcher }}
    >
      <PopularAnime />
      <PopularFilms />
    </SWRConfig>
  </>
)

export default Home