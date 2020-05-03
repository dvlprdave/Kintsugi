import fetch from 'isomorphic-unfetch'
import Navbar from '../../components/Navbar'
import TrailerVideo from './../../components/TrailerVideo'

const Post = ({ anime }) => {
  let {
    titles: { en, ja_jp },
    synopsis,
    posterImage: { small },
    coverImage: { large },
    youtubeVideoId
  } = anime.data.attributes

  console.log(anime)
  return (
    <div className='relative'>
      <div className='z-0'>
        <img className='absolute mb-4 h-12 min-h-230 w-full object-cover opacity-50' src={large} />
      </div>
      <div className='relative container z-50'>
        <Navbar />
        <div className='mt-16 grid grid-cols-anime gap-6'>
          <img className='z-50' src={small} />

          <div className='self-end'>
            <h1 className='sm:text-3xl'>{en}</h1>
            <h1 className='sm:text-3xl pb-4'>{ja_jp}</h1>
            <div>
              <p className='max-w-2xl pb-3 overflow-hidden'>{synopsis.substring(0, 250)}...</p>
              {/* <p className='max-w-2xl pb-3 overflow-hidden truncate'>{synopsis}...</p> */}
            </div>
            <button className='text-teal-500 hover:text-teal-900 transition ease-in-out duration-500'>Read More</button>
          </div>

          <div className='self-end video-span'>
            <TrailerVideo videoId={youtubeVideoId} />
          </div>
        </div>
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
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { id: show.id }
  }))

  return { paths, fallback: true }
}

export default Post