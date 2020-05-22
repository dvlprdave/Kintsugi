import { useState, useEffect } from "react"
import YouTube from 'react-youtube'

const TrailerVideo = ({youtubeVideoId, height, width='100%'}) => {

  const [notMobile, setNotMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setNotMobile(window.innerWidth > 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const opts = {
    height,
    width
  }

  return (
    <div className='md:mt-10 mb-6'>
      <h2 className='md:text-xl pb-6 font-bold'>Trailer</h2>

      {notMobile ? (
        <YouTube className='w:auto' videoId={youtubeVideoId} opts={opts} />
      ) : (
        <div>
          <a
            className='z-99 p-12'
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
            target='_blank'
          >
            <YouTube
              videoId={youtubeVideoId}
              height='90'
              // width='100%'
            />
          </a>
        </div>
      )}
    </div>
  )
}

export default TrailerVideo

