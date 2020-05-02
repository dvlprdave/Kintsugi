import YouTube from 'react-youtube'

const TrailerVideo = ({videoId}) => {
  const opts = {
    height: '290',
    width: '540'
  }
  
  return <YouTube videoId={videoId} opts={opts} />
}

export default TrailerVideo