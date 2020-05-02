import fetch from 'isomorphic-unfetch'
import Navbar from '../../components/Navbar'

const Post = ({ anime }) => {
  let {
    titles: { en },
    synopsis,
    posterImage: { small },
    coverImage: { large },
  } = anime.data.attributes

  console.log(anime)
  return (
    <div className='relative'>
      <div className='z-0'>
        <img className='absolute mb-4 max-h-400 min-h-1/4 w-full object-cover opacity-50' src={large} />
      </div>
      <div className='relative container z-50'>
        <Navbar />
        <img className='z-50' src={small} />
        <h1 className='sm:text-3xl'>{en}</h1>
        <p>{synopsis.substring(0, 150)}...</p>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://kitsu.io/api/edge/anime/${params.id}`)
  const anime = await res.json()

  return { props: { anime } }
}

export const getStaticPaths = async () => {
  // TODO: use promise.all or not 
  // const [anime, animeMovies] = await Promise.all([
  //   fetch('https://kitsu.io/api/edge/anime'),
  //   fetch('https://kitsu.io/api/edge/anime?filter%5Bsubtype%5D=movie')
  // ]).then(responses => responses.map(response => response.json()))
    // .catch(e => console.log(e,"There was an error retrieving the data"));
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { id: show.id }
  }))

  return { paths, fallback: true }
}

export default Post