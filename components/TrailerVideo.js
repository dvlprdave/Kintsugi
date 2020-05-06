import YouTube from 'react-youtube'

const TrailerVideo = ({videoId, height='290', width='540'}) => {
  const opts = {
    height,
    width
  }

  return <YouTube videoId={videoId} opts={opts} />
}

export default TrailerVideo