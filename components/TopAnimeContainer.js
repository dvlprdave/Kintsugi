import Link from 'next/link'

const TrendingAnime = ({ data }) => (
  <div className='sm:justify-between justify-center items-center grid grid-cols-fill gap-4 my-10'>
    {data.data.map(anime => {
      let {
        canonicalTitle,
        posterImage: { medium },
      } = anime.attributes

      return (
        <div key={anime.id}>
          <Link href='/anime/[id]' as={`/anime/${anime.id}`}>
            <img className='cursor-pointer' src={medium} />
          </Link>
          <h2 className='font-semibold'>{canonicalTitle}</h2>
        </div>
      )
    })}
  </div>
)

export default TrendingAnime