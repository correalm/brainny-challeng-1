export const listClientsWithIndex = (records) => {
  records.forEach((record, index) => {
    console.log(`Cliente ${index}: ${record.name.split(" ").join("_").toUpperCase()}`)
  });
}