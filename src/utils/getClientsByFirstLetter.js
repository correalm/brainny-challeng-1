export const getClientsByFirstLetter = (records, letter) => {
  return records.filter(record => record.name[0].toLowerCase() === letter.toLowerCase() )
}