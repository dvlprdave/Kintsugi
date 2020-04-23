import Head from 'next/head'
import useSWR from 'swr'
import Link from 'next/link'

import fetcher from '../helpers/fetcher'

const API_URL = 'https://kitsu.io/api/edge/trending/anime'

const Home = () => {

  const { data, error } = useSWR(API_URL, fetcher)

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Aniplex</h1>

      {data.data.map(anime => {
        let {
          averageRating,
          canonicalTitle,
          synopsis,
          posterImage: { medium },
        } = anime.attributes

        console.log(anime.id);

        return (
          <div key={anime.id}>
            <img src={medium} />
            <h2>{canonicalTitle}</h2>
            <p>{synopsis}</p>
            <Link href='/anime/[id]' as={`/anime/${anime.id}`}>
              <a>Anime Page</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
// Color Palette
// #1A0F0D