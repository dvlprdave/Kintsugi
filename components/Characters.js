import useSWR from 'swr'
import fetcher from './../helpers/fetcher'

const Characters = ({ animeCharacters }) => (

  animeCharacters.data.map(char => {
    let { related } = char.relationships.character.links

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const names = Object.values(data).map((item) => {
      let { original: characterImg } = item.attributes.image
      let { name } = item.attributes

      return (
        <div className='w-20 h-auto md:w-full' key={item.id}>
          <div>
            <img className='character-img object-cover' src={characterImg} alt="character" />
            <p className='text-left text-sm'>{name}</p>
          </div>
        </div>
      )
    })

    return (
      <ul key={char.id}>
        <li>{names}</li>
      </ul>
    )
  })
)

export default Characters