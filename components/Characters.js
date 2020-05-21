import useSWR from 'swr'
import fetcher from './../helpers/fetcher'

const Characters = ({ animeCharacters }) => {

  let {count} = animeCharacters.meta

  const characterList = animeCharacters.data.map(char => {
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
            characterImg && 
            <div key={item.id}>
              <div className='h-full md:w-24 lg:w-16 xl:w-auto'>
                <img className='object-cover' src={characterImg.original} alt="character" />
              </div>
              <p className='text-left text-sm'>{name.substring(0, 13)}</p>
            </div>
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

  let countCheck = !count 
    ? <p className='col-span-4 md:text-lg'>
        There are no viewable characters
      </p>
    : characterList
  

  return (
    <div className='grid grid-cols-4 xl:grid-cols-5 gap-4'>
      <h3 className='col-span-4 md:col-span-4 xl:col-span-5 md:text-xl pb-2 font-bold'>
        Characters
      </h3>
      {countCheck}
    </div>
  )
}

export default Characters