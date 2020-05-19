import useSWR from 'swr'
import fetcher from './../helpers/fetcher'
import Link from 'next/link'

const Streamers = ({ streaming }) => {

  const streamSite = streaming.data.map(streamer => {
    let { related } = streamer.relationships.streamer.links
    let { url } = streamer.attributes

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const streamerName = Object.values(data).map((site) => {
      let { siteName } = site.attributes
      return siteName
    })

    console.log(streamerName);
    return (
      <li className='pr-2'>
        <Link href={url} prefetch={false}>
          <a>{streamerName}</a>
        </Link>
      </li>
    )
  })

  console.log(streamSite);
  
  return (
    <div>
      <h2 className='md:text-xl pb-2 font-bold'>Streaming On</h2>
      <ul className='flex flex-wrap'>
        {streamSite}
      </ul>
    </div>
  )
}

export default Streamers