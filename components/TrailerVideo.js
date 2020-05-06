import YouTube from 'react-youtube'

const TrailerVideo = ({videoId, height='290'}) => {
  const opts = {
    height: height,
    width: '540'
  }

  return <YouTube videoId={videoId} opts={opts} />
}

export default TrailerVideo