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


const records = buildRecords(1000)


console.log(getClientsByFirstLetter(records, 'a'))
console.log("------------------------------------------------")
console.log(countRecordsByFirstLetter(records, 'a'))
console.log("------------------------------------------------")
console.log(getClientsName(records))
console.log("------------------------------------------------")
console.log(getClientsFirstNameByFirstLetter(records, 'a'))
console.log("------------------------------------------------")
console.log(getClientsFirstName(records))
console.log("------------------------------------------------")
console.log(getAdultClients(records))
console.log("------------------------------------------------")
records[0].name = 'maria conceição'
console.log(verifyNamePresence(records, 'maria conceição'))
console.log("------------------------------------------------")
console.log(sumOfSells(records))
console.log("------------------------------------------------")
listClients(records)
console.log("------------------------------------------------")
listClientsWithIndex(records)
console.log("------------------------------------------------")
console.log(verifyLastPurchase(records))
console.log("------------------------------------------------")
console.log(getClientsByPurchases(records))
console.log("------------------------------------------------")
console.log(insertClient(records, buildRecords(1, true)))