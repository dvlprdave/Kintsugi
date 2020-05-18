import { useRouter } from 'next/router'
import Link from 'next/link'

const AnimeGrid = ({ anime, headingLabel }) => {
  const router = useRouter()
  let headingLabelStyle = router.pathname === '/' ? '' : 'text-center mb-10'

  return (
    <div className='mb-10'>
      <h1 className={`mb-5 ${headingLabelStyle}`}>{headingLabel}</h1>
      <div className='grid grid-cols-fill gap-6'>
        {anime.data.map(anime => {
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
    </div>
  )
}

export default AnimeGrid