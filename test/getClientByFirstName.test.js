import { buildRecords } from "../src/utils/buildRecords.js";
import { getClientsFirstName } from "../src/utils/getClientsFirstName.js";

const records = buildRecords(2)
records[0].name = 'Test test'
records[1].name = 'Other test'

describe('getClientsFirstName function', () => {
  it('Should return a array with length 1 and name = "Test test"', () => {
    const client = getClientsFirstName(records, "Test")

    expect(client.length).toBe(2)
    expect(client[0]).toBe("Test")
    expect(client[1]).toBe("Other")
  })
})