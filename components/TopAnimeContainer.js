import Link from 'next/link'
import useSWR from 'swr'
import AnimeSlider from './Slider'

const TrendingAnime = ({ apiUrl }) => {

  const { data, error } = useSWR(apiUrl)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  

  return (
    <div className='px-6 md:px-16 my-10'>
      <AnimeSlider>
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
      </AnimeSlider>
    </div>
  )
}

export default TrendingAnime