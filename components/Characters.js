import useSWR from 'swr'
import fetcher from './../helpers/fetcher'

const Characters = ({ animeCharacters }) => (

  animeCharacters.data.map(char => {
    let { related } = char.relationships.character.links

    const { data, error } = useSWR(related, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const names = Object.values(data).map((item) => {
      let characterImg = item.attributes.image
      let { name } = item.attributes

      return (
        <div key={item.id}>
          {
            characterImg
              ? (
                <div key={item.id}>
                  <div className='h-full md:w-24 lg:w-16 xl:w-auto'>
                    <img className='object-cover' src={characterImg.original} alt="character" />
                  </div>
                  <p className='text-left text-sm'>{name.substring(0, 13)}</p>
                </div>
              )
              : null
          }

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