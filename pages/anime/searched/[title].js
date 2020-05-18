import fetch from 'isomorphic-unfetch'
import AnimeGrid from '../../../components/AnimeGrid'

const Searched = ({anime}) => {
  return (
    <div>
      <h1>This is a listing of searched Anime</h1>
      {/* {
        anime.data.map(title => {
          let {
            canonicalTitle,
            ageRatingGuide
          } = title.attributes

          return (
            <div key={title.id}>
              <h3>{canonicalTitle}</h3>
              <p>{ageRatingGuide}</p>
            </div>
          )
        })
      } */}
      <AnimeGrid
        anime={anime}
        // headingLabel={params.title}
      />
    </div>
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

  return { paths, fallback: false }
}

export default Searched