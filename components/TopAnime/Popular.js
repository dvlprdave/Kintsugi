import useSWR from 'swr'
import TopAnimeContainer from '../TopAnimeContainer'

const PopularAnime = () => {
  const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bsubtype%5D=movie'
  // TODO: Top Rated Movies & Adventures 
  // TOP RATED MOVIES const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bsubtype%5D=movie'
  // TOP RATED ADVENTURE const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bgenres%5D=adventure'

  const { data: popularAnime, error } = useSWR(apiUrl_Popular)

  console.log(popularAnime)
  
  if (error) return <div>failed to load</div>
  if (!popularAnime) return <div>loading...</div>

  return <TopAnimeContainer data={popularAnime} />
}

export default PopularAnime

// /anime?include=categories,mediaRelationships.destination