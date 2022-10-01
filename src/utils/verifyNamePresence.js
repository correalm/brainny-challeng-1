export const verifyNamePresence = (records, name) => {
  return records.map(record => record.name.toLowerCase()).includes(name.toLowerCase())
}