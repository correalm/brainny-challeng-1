import { getClientsByFirstLetter } from "./getClientsByFirstLetter.js"
import { getClientsFirstName } from "./getClientsFirstName.js"

export const getClientsFirstNameByFirstLetter = (records, letter) => {
  const clients = getClientsByFirstLetter(records, letter)
  
  return getClientsFirstName(clients)
} 