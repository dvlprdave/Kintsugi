import useSWR from 'swr'
import fetcher from './../helpers/fetcher'

const Streamers = ({ streaming }) => (

  streaming.data.map(streamer => {
    let { related } = streamer.relationships.streamer.links

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const streamerName = Object.values(data).map((site) => {
      let { siteName } = site.attributes

      return <li className='pb-2'>{siteName}</li>
    })

    return (
      <ul className='flex flex-wrap'>
        {streamerName}
      </ul>
    )
  })
)

export default Streamers