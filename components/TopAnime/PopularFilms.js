import TopAnimeContainer from '../TopAnimeContainer'

const PopularFilms = () => {
  const apiUrl = 'https://kitsu.io/api/edge/anime?sort=-averageRating&filter%5Bsubtype%5D=movie'

  return <TopAnimeContainer apiUrl={apiUrl} />
}

export default PopularFilms