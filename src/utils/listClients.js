export const listClients = (records) => {
  records.forEach((record) => {
    console.log(`Cliente: ${record.name.split(" ").join("_").toUpperCase()}`)
  });
}