import Head from 'next/head'
import useSWR from 'swr'

import fetcher from '../helpers/fetcher'
import TrendingAnime from '../components/TrendingAnime'
import Navbar from './../components/Navbar';

const API_URL = 'https://kitsu.io/api/edge/trending/anime'

const Home = () => {

  const { data, error } = useSWR(API_URL, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)
  return (
    <div className="container">
      <Head>
        <title>Kintsugi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
    <TrendingAnime data={data}/>
    </div>
  )
}

export default Home