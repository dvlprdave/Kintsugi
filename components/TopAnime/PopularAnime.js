import TopAnimeContainer from '../TopAnimeContainer'

const PopularAnime = ({ limit = '6' }) => {
  const apiUrl = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=${limit}&sort=-averageRating`

  return (
    <TopAnimeContainer 
      apiUrl={apiUrl} 
      popular='top anime' 
      headingLabel='Highest Rated Anime' 
      page='popularAnime' 
    />
  )
}

export default PopularAnime