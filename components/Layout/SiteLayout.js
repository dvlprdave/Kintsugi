import Navbar from './../Navbar'

const SiteLayout = ({children}) => (
  <div className='container px-10 md:px-0'>
    <Navbar />
    {children}
  </div>
)

export default SiteLayout