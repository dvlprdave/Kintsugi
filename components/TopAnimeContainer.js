import Link from 'next/link'

const TrendingAnime = ({ data }) => (
  <div className='grid grid-cols-fill gap-6 justify-center my-10'>
    {data.data.map(anime => {
      let {
        canonicalTitle,
        posterImage: { large },
      } = anime.attributes

      return (
        <div className='flex-col items-start p-2' key={anime.id}>
          <Link href='/anime/[id]' as={`/anime/${anime.id}`}>
            <img className='cursor-pointer' src={large} />
          </Link>
          <article className=''>
            <h3 className='font-semibold pt-2 truncate'>{canonicalTitle}</h3>
          </article>
        </div>
      )
    })}
  </div>
)

export default TrendingAnime