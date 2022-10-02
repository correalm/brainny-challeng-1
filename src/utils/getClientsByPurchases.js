export const getClientsByPurchases = (records) => {
  return records.filter(record => parseInt(record.countPurchase) > 15)
}