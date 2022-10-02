export const insertClient = (records, client) => {
  records.unshift(client)
  return records
}