import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import AnimeGrid from '../../../components/AnimeGrid'

const Searched = ({anime}) => {
  const router = useRouter()
  if(router.isFallback) return <div>loading...</div>
  
  return (
      <AnimeGrid anime={anime} />
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${params.title}`)
  const anime = await res.json()
  
  return { props: { anime } }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { title: show.id }
  }))

  return { paths, fallback: true }
}

export default Searched