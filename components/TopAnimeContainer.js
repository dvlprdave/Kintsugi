import Link from 'next/link'
import useSWR from 'swr'

import NextArrow from '../public/next-arrow.svg'
import fetcher from './../helpers/fetcher';

const TrendingAnime = ({ apiUrl, popular }) => {

  const { data, error } = useSWR(apiUrl, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  return (
    <>
      <div className='grid grid-cols-fill gap-6 mt-10'>
        {data.data.map(anime => {
          let {
            canonicalTitle,
            posterImage: { large },
          } = anime.attributes

          return (
            <div className='flex-col items-start' key={anime.id}>
              <Link href='/anime/[id]' as={`/anime/${anime.id}`}>
                <img className='cursor-pointer rounded' src={large} />
              </Link>
              <article>
                <h3 className='font-semibold pt-2 truncate'>{canonicalTitle}</h3>
              </article>
            </div>
          )
        })}
      </div>

      <div className='flex justify-center sm:justify-end sm:pr-16'>
        <button className='text-gray-400 hover:opacity-25 transition ease-in-out duration-500'>
          <Link href='/anime/top/popularFilms' as={`/anime/top/${popular}`}>
            <a className='flex items-center'>
              More 
              <span className='pl-2'><NextArrow className='fill-current text-teal-500' /></span>
            </a>
          </Link>
        </button>
      </div>
    </>
  )
}

export default TrendingAnime