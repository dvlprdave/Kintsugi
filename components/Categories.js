const Categories = ({ categories }) => {
  const CategoryTitles = categories.data.map(category => 
    <li>{category.attributes.title}</li>
  )

  return (
    <div className='mt-12'>
      <h2 className='mb-2'>Categories</h2>
      <ul className='flex flex-wrap justify-between'>
        {CategoryTitles}
      </ul>
    </div>
  )
}

export default Categories