import Link from 'next/link'

const Categories = ({ categories }) => {
  
  const CategoryTitles = categories.data.map(category => 
    <li className='align-middle px-4 py-1 mr-2 mb-4 bg-gray-800 border border-gray-900 hover:bg-gray-700 transition ease-in-out duration-500'>
      <Link href='/anime/categories/[categories]' as={`/anime/categories/${category.attributes.title}`}>
        <a>{category.attributes.title}</a>
      </Link>
    </li>
  )

  return (
    <div className='mt-12 mb-6 max-w-lg lg:max-w-2xl'>
      <h2 className='md:text-xl pb-6 font-bold'>Categories</h2>
      <ul className='flex flex-wrap space-between'>
        {CategoryTitles}
      </ul>
    </div>
  )
}

export default Categories