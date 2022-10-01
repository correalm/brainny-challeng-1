export const years = (date) => {
  const today = Date.now()
  const dateInMilliseconds = Date.parse(date)

  return Math.floor((today - dateInMilliseconds) /1000/60/60/24/365)
}