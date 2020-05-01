import TopAnimeContainer from '../TopAnimeContainer'

const PopularFilms = () => {
  const apiUrl = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=4&sort=-averageRating&filter%5Bsubtype%5D=movie'

  return <TopAnimeContainer apiUrl={apiUrl} />
}

export default PopularFilms