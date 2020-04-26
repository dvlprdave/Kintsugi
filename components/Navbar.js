const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap p-6">
    <div className="flex items-center flex-shrink-0 mr-6">
      <span className="font-semibold text-3xl tracking-tight">Kintsugi</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-teal hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="lg:flex-grow text-sm md:text-lg">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4">
          Docs
      </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4">
          Examples
      </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
          Blog
      </a>
      </div>
      <div>
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Kintsugi" aria-label="Full name" />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
)

export default Navbar