import { buildRecords } from "./utils/buildRecords.js";
import { getClientsByFirstLetter } from "./utils/getClientsByFirstLetter.js";
import { listClientsWithIndex } from "./utils/listClientsWithIndex.js";
import { countRecordsByFirstLetter } from "./utils/countRecordsByFirstLetter.js";
import { listClients } from "./utils/listClients.js";
import { getClientsName } from "./utils/getClientsName.js";
import { getClientsFirstName } from "./utils/getClientsFirstName.js";
import { getClientsFirstNameByFirstLetter } from "./utils/getClientsFirstNameByFirstLetter.js"
import { getAdultClients } from "./utils/getAdultClients.js";
import { verifyNamePresence } from "./utils/verifyNamePresence.js";
import { sumOfSells } from "./utils/sumOfSells.js";
import { verifyLastPurchase } from "./utils/verifyLastPurchase.js";
import { getClientsByPurchases } from "./utils/getClientsByPurchases.js";
import { insertClient } from "./utils/insertClient.js";


const records = buildRecords(1)


console.log(getClientsByFirstLetter(records, 'a'))
console.log(countRecordsByFirstLetter(records, 'a'))
console.log(getClientsName(records))
console.log(getClientsFirstNameByFirstLetter(records, 'a'))
console.log(getClientsFirstName(records))
console.log(getAdultClients(records))
records[0].name = 'maria conceição'
console.log(verifyNamePresence(records, 'maria conceição'))
console.log(sumOfSells(records))
listClients(records)
listClientsWithIndex(records)
console.log("------------------------------------------------")
console.log(verifyLastPurchase(records))
console.log("------------------------------------------------")
console.log(getClientsByPurchases(records))
console.log("------------------------------------------------")
console.log(insertClient(records, buildRecords(1, true)))