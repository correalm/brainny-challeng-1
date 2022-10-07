export const verifyNamePresence = (records, name) => {
  return Boolean(records.map(record => record.name.toLowerCase()).includes(name.toLowerCase()))
}