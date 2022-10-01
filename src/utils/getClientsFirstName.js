export const getClientsFirstName = (records) => {
  return records.map(record => getFirstName(record.name))
}

const getFirstName = (name) => {
  return name.split(" ")[0]
}