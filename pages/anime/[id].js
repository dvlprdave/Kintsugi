import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Post = ({ anime }) => {
  let {
    titles: {en},
    synopsis,
    posterImage: { medium },
  } = anime.data.attributes

  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <h1>
        {en}
      </h1>
      <img src={medium}/>
      <p>{synopsis.substring(0, 150)}...</p>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://kitsu.io/api/edge/anime/${params.id}`)
  const anime = await res.json()

  return { props: { anime } }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { id: show.id }
  }))

  return {paths, fallback: true}
}

export default Post