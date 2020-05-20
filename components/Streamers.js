import useSWR from "swr"
import fetcher from "./../helpers/fetcher"
import Link from "next/link"

const Streamers = ({ streaming }) => {
  const streamId = streaming.data.map(stream => stream.id)

  const streamSite = streaming.data.map((streamer) => {
    let { related } = streamer.relationships.streamer.links
    let { url } = streamer.attributes

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const streamerName = Object.values(data).map((site) => {
      let { siteName } = site.attributes
      return siteName
    })

    return (
      <li className='pr-2 mb-6'>
        <Link href={url} prefetch={false}>
          <a className='p-2 bg-gray-800 border border-gray-900 hover:bg-gray-700 transition ease-in-out duration-500'>{streamerName}</a>
        </Link>
      </li>
    )
  })

  return (
    <div key={streamId}>
      <h2 className='md:text-xl pb-6 font-bold'>Streaming On</h2>
      <ul className='flex flex-wrap'>{streamSite}</ul>
    </div>
  )
}

export default Streamers
