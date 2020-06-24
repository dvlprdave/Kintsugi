import { useState } from "react"
import { useRouter } from 'next/router'
import fetch from "isomorphic-unfetch"

import Navbar from "../../components/Navbar"
import TrailerVideo from "../../components/TrailerVideo"
import Characters from "./../../components/Characters"
import Categories from "../../components/Categories"
import Details from '../../components/Details'
import Streamers from "../../components/Streamers"
import Reviews from "../../components/Reviews"

const Post = ({ anime, animeCharacters, categories, streaming, reviews}) => {
  const router = useRouter()
  if(router.isFallback) return <div>loading...</div>

  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => setReadMore((prevState) => !prevState)

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
    youtubeVideoId,
  } = anime.data.attributes

  const defaultImg = "/cover-img-default.jpg"

  const synopsisSubString = () =>
    !readMore ? synopsis.substring(0, 240) : synopsis.substring(0, 2000)

  return (
    <div className='relative'>
      <div className='z-0'>
        <img
          className='absolute mb-4 h-12 min-h-230 min-w-full object-cover opacity-50'
          src={!coverImage ? defaultImg : coverImage.large}
        />
      </div>
      <div className='relative container z-50 mb-8'>
        <Navbar />

        <div className='mt-16 flex flex-wrap md:flex-no-wrap'>
          {/* Main  */}
          <div className='md:max-w-284'>
            <img className='z-50 mb-6' src={small} />

            <Details
              ja_jp={ja_jp}
              startDate={startDate}
              endDate={endDate}
              ageRating={ageRating}
              ageRatingGuide={ageRatingGuide}
              episodeCount={episodeCount}
            />
            <Streamers streaming={streaming} />
          </div>

          <div className='flex flex-wrap lg:flex-no-wrap flex-initial md:flex-1 '>
            <div className='mt-6 md:mt-40 md:ml-6 lg:mr-10'>
              <h1 className='sm:text-3xl pb-1'>{en}</h1>
              <h2 className='sm:text-xl lg:text-2xl pb-4 text-yellow-600'>
                {averageRating}{" "}
                <span className='text-white text-base lg:text-lg'>
                  Community Rating
                </span>
              </h2>
              <div>
                <p className='max-w-lg lg:max-w-2xl pb-3 overflow-hidden xl:text-lg'>
                  {synopsisSubString()}
                  <span className={!readMore ? "inline" : "hidden"}>...</span>
                </p>
                <button
                  className='text-teal-500 hover:text-teal-900 transition ease-in-out duration-500 focus:outline-none focus:shadow-outline'
                  onClick={handleReadMore}
                >
                  {!readMore ? "Read More" : "Read Less"}
                </button>
              </div>
              <Categories categories={categories} />
              <Reviews reviews={reviews}/>
            </div>

            {/* Sidebar */}
            <section className='w-full max-w-full lg:max-w-sm mt-10 md:ml-6 lg:ml-0'>
              <TrailerVideo youtubeVideoId={youtubeVideoId} />
              <Characters animeCharacters={animeCharacters} />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const [anime, animeCharacters, categories, streaming, reviews] = await Promise.all([
    fetch(`https://kitsu.io/api/edge/anime/${params.id}`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/characters`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/categories`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/streaming-links`),
    fetch(`https://kitsu.io/api/edge/anime/${params.id}/reviews`),
  ])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .catch((e) => console.log(e, "There was an error retrieving the data"))

    console.log(anime, animeCharacters, categories, streaming, reviews)

  return { props: { anime, animeCharacters, categories, streaming, reviews } }
}

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime")
  const anime = await res.json()

  const paths = anime.data.map((show) => ({
    params: { id: show.id },
  }))

  return { paths, fallback: true }
}

export default Post