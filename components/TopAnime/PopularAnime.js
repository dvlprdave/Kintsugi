// import useSWR from 'swr'
import TopAnimeContainer from '../TopAnimeContainer'

const PopularAnime = () => {
  const apiUrl = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=4&sort=-averageRating'
  // TODO: Top Rated Movies & Adventures 
  // TOP RATED ADVENTURE const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bgenres%5D=adventure'

  return <TopAnimeContainer apiUrl={apiUrl} />
}

export default PopularAnime