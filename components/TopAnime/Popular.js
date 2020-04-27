import useSWR from 'swr'
import TopAnimeContainer from '../TopAnimeContainer'

const PopularAnime = () => {
  const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=popularityRank'
  const newSeason = 'https://kitsu.io/api/edge/anime?filter%5Bstreamers%5D=Crunchyroll'

  const { data: popularAnime, error } = useSWR(apiUrl_Popular)
  
  if (error) return <div>failed to load</div>
  if (!popularAnime) return <div>loading...</div>

  return <TopAnimeContainer data={popularAnime} />
}

export default PopularAnime

// /anime?include=categories,mediaRelationships.destination