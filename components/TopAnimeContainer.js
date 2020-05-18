import Link from 'next/link'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import NextArrow from '../public/next-arrow.svg'
import fetcher from './../helpers/fetcher'

const TrendingAnime = ({ apiUrl, page, headingLabel }) => {
  const router = useRouter()

  const { data, error } = useSWR(apiUrl, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  let headingLabelStyle = router.pathname === '/' ? '' : 'text-center mb-10'

  return (
    <div className='mb-10'>
      <h1 className={`mb-5 ${headingLabelStyle}`}>{headingLabel}</h1>
      <div className='grid grid-cols-fill gap-6'>
        {data.data.map(anime => {
          let {
            canonicalTitle,
            posterImage: { large },
          } = anime.attributes

          return (
            <div className='flex-col items-start mb-4' key={anime.id}>
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

      {router.pathname === '/' && (
        <div className='flex justify-center sm:justify-end'>
          <button className='text-gray-400 hover:opacity-25 transition ease-in-out duration-500 focus:outline-none focus:shadow-outline'>
            <Link href={`/anime/top/${page}`}>
              <a className='flex items-center'>
                More
               <span className='pl-2'><NextArrow className='fill-current text-teal-500' /></span>
              </a>
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default TrendingAnime