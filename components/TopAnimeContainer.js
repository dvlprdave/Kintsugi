import Link from 'next/link'
import useSWR from 'swr'

const TrendingAnime = ({ apiUrl }) => {

  const { data, error } = useSWR(apiUrl)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  return (
    <>
      <div className='grid grid-cols-fill px-6 md:px-16 mt-10'>
        {data.data.map(anime => {
          let {
            canonicalTitle,
            posterImage: { large },
          } = anime.attributes

          return (
            <div className='flex-col items-start p-2' key={anime.id}>
              <Link href='/anime/[id]' as={`/anime/${anime.id}`}>
                <img className='cursor-pointer rounded' src={large} />
              </Link>
              <article className=''>
                <h3 className='font-semibold pt-2 truncate'>{canonicalTitle}</h3>
              </article>
            </div>
          )
        })}
      </div>
      <div className='flex justify-center sm:justify-end sm:pr-16'>
        <button className='btn btn-gray'>View More</button>
      </div>
    </>
  )
}

export default TrendingAnime