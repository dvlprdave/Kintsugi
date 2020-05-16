import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import formatedDates from './../../helpers/formatDates'

import Navbar from '../../components/Navbar'
import TrailerVideo from '../../components/TrailerVideo'
import Characters from './../../components/Characters'
import Categories from '../../components/Categories';

const Post = ({ anime, animeCharacters, categories }) => {
  const [notMobile, setNotMobile] = useState(true)
  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => setReadMore(prevState => !prevState)

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
    averageRating,
    episodeCount,
    posterImage: { small },
    coverImage,
    youtubeVideoId
  } = anime.data.attributes

  const defaultImg = '/cover-img-default.jpg'
  let { count } = animeCharacters.meta

  const synopsisSubString = () => (
    !readMore
      ? synopsis.substring(0, 240)
      : synopsis.substring(0, 2000)
  )

  console.log(categories)

  return (
    <div className='relative'>
      <div className='z-0'>
        <img className='absolute mb-4 h-12 min-h-230 w-full object-cover opacity-50' src={!coverImage ? defaultImg : coverImage.large} />
      </div>
      <div className='relative container z-50'>
        <Navbar />

        <div className='mt-16 flex flex-wrap md:flex-no-wrap'>
          {/* Main  */}
          <div className='md:max-w-284'>
            <img className='z-50 mb-6' src={small} />

            <div className='xl:text-lg'>
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
                <li>
                  <span className='font-bold'>Episodes:</span> {episodeCount}
                </li>
              </ul>
            </div>
          </div>

          {/* Info Section */}
          <div className='flex flex-wrap lg:flex-no-wrap md:flex-1 '>
            <div className='mt-6 md:mt-40 md:ml-6 lg:mr-10'>
              <h1 className='sm:text-3xl pb-1'>{en}</h1>
              <h2 className='sm:text-xl lg:text-2xl pb-4 text-teal-500'>{averageRating} <span className='text-white text-base lg:text-lg'>Community Rating</span></h2>
              <div>
                <p className='max-w-2xl pb-3 overflow-hidden xl:text-lg'>{synopsisSubString()}<span className={!readMore ? 'inline' : 'hidden'}>...</span></p>
                <button className='text-teal-500 hover:text-teal-900 transition ease-in-out duration-500' onClick={handleReadMore}>{!readMore ? 'Read More' : 'Read Less'}</button>
              </div>
              <Categories categories={categories} />
            </div>

            {/* Sidebar */}
            <section className='max-w-full lg:max-w-sm mt-10 md:ml-6 lg:ml-0'>
              <div className=' md:mt-10 mb-6'>
                <h2 className='md:text-lg pb-6 font-bold'>Trailer</h2>

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

              <div className='grid grid-cols-4 xl:grid-cols-5 gap-4'>
                <h3 className='col-span-4 md:col-span-4 xl:col-span-5 md:text-xl pb-2 font-bold'>Characters</h3>
                {
                  !count
                    ? <p className='col-span-4 md:text-lg'>There are no viewable characters</p>
                    : <Characters animeCharacters={animeCharacters} />
                }
              </div>
            </section>
          </div>


        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const [anime, animeCharacters, categories] = await Promise.all([
    fetch(`https://kitsu.io/api/edge/anime/${params.id}`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/characters`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/categories`),
  ])
  .then(responses => Promise.all(responses.map(response => response.json())))
    .catch(e => console.log(e, "There was an error retrieving the data"))

  return { props: { anime, animeCharacters, categories } }
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