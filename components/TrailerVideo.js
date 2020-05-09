import YouTube from 'react-youtube'

const TrailerVideo = ({videoId, height, width='100%'}) => {
  const opts = {
    height,
    width
  }

  return <YouTube className='w:auto sm:h-48 md:36 lg:h-48 xl:h-64' videoId={videoId} opts={opts} />
}

export default TrailerVideo

