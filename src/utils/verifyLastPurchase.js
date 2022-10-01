import { years } from "./years.js"

export const verifyLastPurchase = (records) => {
  return records.filter( record => years(record.lastPurchaseDate) > 1 )
}