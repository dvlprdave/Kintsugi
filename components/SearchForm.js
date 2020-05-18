import { useState } from 'react'
import Link from 'next/link'

const SearchForm = ({search}) => {
  const [searchValue, setSearchValue] = useState('')
  const [formError, setFormError] = useState('')

  const handleInputChange = (e) => setSearchValue(e.target.value)

   const handleSubmit = async (e) => {
    e.preventDefault()

    let animeQuery = searchValue
    const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeQuery}`)
    const animeData = await res.json()

    console.log(animeData)
    
    if(!animeData) return setFormError('Please enter Anime title')

    setSearchValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-b-2 border-teal-900 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Kintsugi"
            aria-label="Search Kintsugi"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className="flex-shrink-0 bg-teal-900 hover:bg-teal-700 border-teal-900 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition ease-in-out duration-500 focus:outline-none focus:shadow-outline" 
          type="button"
          onClick={handleSubmit}>
            <Link href='/anime/searched/[title]' as={`/anime/searched/${searchValue}`}>
              <a className='focus:outline-none focus:shadow-outline'>Search</a>
            </Link>
          </button>
        </div>
      </form>
      <div>{formError}</div>
    </div>
  )
}

export default SearchForm