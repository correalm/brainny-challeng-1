import { buildRecords } from "../src/utils/buildRecords.js";
import { years } from "../src/utils/years.js"
import { getAdultClients } from "../src/utils/getAdultClients.js"

const records = buildRecords(2)
records[0].birthday = '2020-01-01T00:00:00.000Z'
records[1].birthday = '1999-01-01T00:00:00.000Z'

describe('getClientsByFirstLetter function', () => {
  it('Should return a array with length 1, birthday = 1999-01-01 and age > 18 ', () => {
    const client = getAdultClients(records)
    const age = years(client[0].birthday)
    
    expect(client.length).toBe(1)
    expect(client[0].birthday).toBe('1999-01-01T00:00:00.000Z')
    expect(age).toBeGreaterThan(18)
  })
})