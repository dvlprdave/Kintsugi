import moment from 'moment'

const formatedDates = (start, end) => {
  const started = moment(start).format('MM-DD-YYYY')
  const ended = moment(end).format('MM-DD-YYYY')

  if (started === ended) return started

  return (
    `${started} - ${ended}`
  )
}

export default formatedDates