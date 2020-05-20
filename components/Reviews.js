const Reviews = ({ reviews }) => {

const userReview = reviews.data.map(review => {

  let reviewContent = review.attributes.content

  return(
    <li className='mb-4 pb-2 border-b-2 border-gray-600'>
      {
        reviewContent.length <= 240 
        ? reviewContent.substring(0, 240) 
        : `${reviewContent.substring(0, 240)} ${'...'}`
      }
    </li>
  )
})

return (
  <div className='max-w-lg xl:max-w-2xl'>
    <h2 className='font-bold mb-6 md:text-2xl'>Reviews</h2>
    <ul>
      {userReview}
    </ul>
  </div>
)
}

export default Reviews