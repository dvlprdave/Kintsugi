import TopAnimeContainer from '../TopAnimeContainer'

const PopularAnime = ({ limit = '4' }) => {
  const apiUrl = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=${limit}&sort=-averageRating`
  // TODO: Top Rated Movies & Adventures 
  // TOP RATED ADVENTURE const apiUrl_Popular = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bgenres%5D=adventure'

  return (
    <TopAnimeContainer 
    apiUrl={apiUrl} 
    popular='top anime' 
    headingLabel='Highest Rated Anime' 
    page='popularAnime' />
  )
}

export default PopularAnime