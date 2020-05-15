import YouTube from 'react-youtube'

const TrailerVideo = ({videoId, height, width='100%'}) => {
  const opts = {
    height,
    width
  }

  return <YouTube className='w:auto md:w-4/5 lg:w-full lg:h-36 xl:h-48' videoId={videoId} opts={opts} />
}

export default TrailerVideo

