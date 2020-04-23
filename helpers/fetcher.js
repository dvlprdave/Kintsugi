const fetcher = (...arg) => fetch(...arg).then(res => res.json())

export default fetcher