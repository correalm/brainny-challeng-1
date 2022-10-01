import { years } from "./years.js"

export const getAdultClients = (records) => {
  return records.map(record => {
    if (years(record.birthday) >= 18) return record
  })
}

