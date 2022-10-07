import { years } from "./years.js"

export const getAdultClients = (records) => {
  return records.filter(record => years(record.birthday) >= 18)
}

