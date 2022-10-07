import { buildRecords } from "../src/utils/buildRecords.js";
import { getClientsByFirstLetter } from "../src/utils/getClientsByFirstLetter";

const records = buildRecords(2)
records[0].name = 'Test test'

describe('getClientsByFirstLetter function', () => {
  it('Should return a array with length 1 and name = "Test test"', () => {
    const client = getClientsByFirstLetter(records, 't')
    expect(client.length).toBe(1)
    expect(client[0].name).toBe('Test test')
  })
})