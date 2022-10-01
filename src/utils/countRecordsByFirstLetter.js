import { getClientsByFirstLetter } from "./getClientsByFirstLetter.js"

export const countRecordsByFirstLetter = (records, letter) => {
  return getClientsByFirstLetter(records, letter).length
}