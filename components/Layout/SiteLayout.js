import Navbar from './../Navbar'

const SiteLayout = ({children}) => (
  <div className='container'>
    <Navbar />
    {children}
  </div>
)

export default SiteLayout