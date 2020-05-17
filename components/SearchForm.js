import { useState } from 'react'

const SearchForm = () => {
  // const [dataItems, setDataItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [formError, setFormError] = useState('')

  const handleInputChange = (e) => setSearchValue(e.target.value)

   const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(searchValue);
    
    let animeQuery = searchValue
    const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeQuery}`)
    const animeData = await res.json()

    console.log(animeData);
    
    if(!animeData) return setFormError('Please enter Anime title')
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
          <button className="flex-shrink-0 bg-teal-900 hover:bg-teal-700 border-teal-900 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition ease-in-out duration-500" 
          type="button"
          onClick={handleSubmit}>
            Search
       </button>
        </div>
      </form>
      <div>{formError}</div>
    </div>
  )
}

export default SearchForm