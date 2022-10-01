export const sumOfSells = (records) => {
  return records.reduce((accumulator, currentRecord) => accumulator + parseInt(currentRecord.countPurchase), 0)
}