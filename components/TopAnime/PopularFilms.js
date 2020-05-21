import TopAnimeContainer from '../TopAnimeContainer'

const PopularFilms = ({limit= '6'}) => {
  const apiUrl = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=${limit}&sort=-averageRating&filter%5Bsubtype%5D=movie`

  return (
    <TopAnimeContainer 
      apiUrl={apiUrl} 
      popular='films' 
      page='popularFilms'
      headingLabel='Top Anime Films' 
    />
  )
}

export default PopularFilms