import YouTube from 'react-youtube'

const TrailerVideo = ({videoId, height, width='100%'}) => {
  const opts = {
    height,
    width
  }

  return <YouTube className='w:auto' videoId={videoId} opts={opts} />
}

export default TrailerVideo

