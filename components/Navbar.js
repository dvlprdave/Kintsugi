import Link from 'next/link'
import { useState } from 'react'
import SearchForm from './SearchForm'

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)

  return (
    <nav className="relative flex flex-wrap sm:flex-no-wrap items-center justify-between py-6 mb-16">
      <div className="flex items-center flex-shrink-0 mr-6 hover:text-gray-800 transition ease-in-out duration-500">
        <Link href="/">
          <a className="font-semibold text-3xl tracking-tight">Kintsugi</a>
        </Link>
      </div>

      <SearchForm />
    </nav>
  )
}

export default Navbar