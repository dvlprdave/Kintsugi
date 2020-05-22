import formatedDates from '../helpers/formatDates'

const Details = ({ja_jp, ageRating, ageRatingGuide, episodeCount, startDate, endDate}) => (
  <div className='xl:text-lg pb-6'>
    <h1 className='mb-2'>Anime Details</h1>
    <ul>
      <li>
        <span className='font-bold'>Japanese Title:</span> {ja_jp}
      </li>
      <li>
        <span className='font-bold'>Aired:</span>{" "}
        {formatedDates(startDate, endDate)}
      </li>
      <li>
        <span className='font-bold'>Rating:</span> {ageRating} /{" "}
        {ageRatingGuide}
      </li>
      <li>
        <span className='font-bold'>Episodes:</span> {episodeCount}
      </li>
    </ul>
  </div>
)

export default Details