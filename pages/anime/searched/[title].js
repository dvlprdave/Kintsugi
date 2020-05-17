const Searched = ({ anime }) => {
  return (
    <div>
      <h1>This is a listing of searched Anime</h1>
      {
        anime.data.map(title => {
          let {
            titles: { en },
            ageRatingGuide
          } = title.attributes.titles

          return (
            <div>
              <h3>{en}</h3>
              <p>{ageRatingGuide}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${params}`)
  const anime = await res.json()

  return { props: { anime } }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime')
  const anime = await res.json()

  const paths = anime.data.map(show => ({
    params: { title: show.attributes.titles.en }
  }))

  return { paths, fallback: false }
}

export default Searched