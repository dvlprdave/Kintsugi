import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import AnimeGrid from '../../../components/AnimeGrid'

const Category = ({anime, categoryName}) => {
  const router = useRouter()
  if(router.isFallback) return <div>loading...</div>

  const searchedCategory = `Category: ${categoryName}`

  return (
      <AnimeGrid anime={anime} headingLabel={searchedCategory} />
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${params.categories}&sort=-averageRating`)
  const anime = await res.json()
  const categoryName = params.categories
  
  return { props: { anime, categoryName } }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { categories: show.id }
  }))

  return { paths, fallback: true }
}

export default Category