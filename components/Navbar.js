import Link from 'next/link'
import { useState } from 'react'
import SearchForm from './SearchForm'

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)

  // const onNavToggle = () => setNavToggle(prevState => !prevState)
  // const isBoxVisible = () => !navToggle ? 'hidden' : 'block'

  return (
    <nav className="relative flex flex-wrap sm:flex-no-wrap items-center justify-between py-6 mb-16">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a className="font-semibold text-3xl tracking-tight">Kintsugi</a>
        </Link>
      </div>

      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto `}>
        <div className='hidden lg:block lg:flex-grow text-sm md:text-lg'>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4 focus:outline-none focus:shadow-outline">
            Manga
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4 focus:outline-none focus:shadow-outline">
            Films
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 focus:outline-none focus:shadow-outline">
            Blog
          </a>
        </div>

        <div className='flex justify-center sm:justify-end'>
        <SearchForm />
        </div>

      </div>
    </nav>
  )
}


export default Navbar