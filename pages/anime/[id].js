import {useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import fetcher from './../../helpers/fetcher'
import formatedDates from './../../helpers/formatDates';

import Navbar from '../../components/Navbar'
import TrailerVideo from '../../components/TrailerVideo'

const Post = ({ anime, animeCharacters }) => {
  const [notMobile, setNotMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setNotMobile(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  

  let {
    titles: { en, ja_jp },
    synopsis,
    startDate,
    endDate,
    ageRating,
    ageRatingGuide,
    posterImage: { small },
    coverImage: { large },
    youtubeVideoId
  } = anime.data.attributes

  const characters = animeCharacters.data.map(char => {
    let { related } = char.relationships.character.links

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const names = Object.values(data).map((item) => {
      let { original: characterImg } = item.attributes.image
      let { name } = item.attributes

      return (
        <div key={item.id}>
          <img className='character-img object-cover' src={characterImg} alt="character"  />
          <p className='text-left text-sm truncate'>{name}</p>
        </div>
      )
    })

    return (
      <ul key={char.id}>
        <li>{names}</li>
      </ul>
    )
  })

  return (
    <div className='relative'>
      <div className='z-0'>
        <img className='absolute mb-4 h-12 min-h-230 w-full object-cover opacity-50' src={large} />
      </div>
      <div className='relative container z-50'>
        <Navbar />
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-anime gap-6'>
          <img className='z-50' src={small} />

          <div className='md:col-start-2 self-end'>
            <h1 className='sm:text-3xl'>{en}</h1>
            <h1 className='sm:text-3xl pb-4'>{ja_jp}</h1>
            <div>
              <p className='max-w-2xl pb-3 overflow-hidden'>{synopsis.substring(0, 250)}...</p>
            </div>
            <button className='text-teal-500 hover:text-teal-900 transition ease-in-out duration-500'>Read More</button>

          </div>

          <div className='lg:self-end md:row-start-3 lg:row-start-1 lg:col-start-3 video-span md:mt-10'>
            {notMobile ? (
              <TrailerVideo videoId={youtubeVideoId} />
            ) : (
              <div>
                <a className='z-99 p-12' href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} target='_blank'>
                  <TrailerVideo videoId={youtubeVideoId} height='90' width='100%' />
                </a>
              </div>
            )}
          </div>

          <div className='md:col-start-1 row-start-3 md:row-start-2 lg:row-start-2'>
            <h1 className='mb-2'>Anime Details</h1>
            <ul>
              <li>
                <span className='font-bold'>Japanese Title:</span> {ja_jp}
              </li>
              <li>
                <span className='font-bold'>Aired:</span> {formatedDates(startDate, endDate)}
              </li>
              <li>
                <span className='font-bold'>Rating:</span> {ageRating} / {ageRatingGuide}
              </li>
            </ul>

          </div>

          <div className='character-grid grid md:grid-cols-3 md:grid-cols-5 md:col-span-2 lg:col-start-3 gap-4'>
            <h3 className='col-span-3 md:col-span-5'>Characters</h3>
            {characters}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const [anime, animeCharacters] = await Promise.all([
    fetch(`https://kitsu.io/api/edge/anime/${params.id}`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/characters`),
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .catch(e => console.log(e, "There was an error retrieving the data"))

  return { props: { anime, animeCharacters } }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { id: show.id }
  }))

  return { paths, fallback: false }
}

export default Post