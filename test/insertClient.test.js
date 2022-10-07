import { insertClient } from '../src/utils/insertClient.js'
import { buildRecords } from '../src/utils/buildRecords.js'

let records = buildRecords(2)

describe('insertClient function', () => {
  it('Should return a array with length 3 and first record must have a name = "Test test"', () => {
    const newRecord = buildRecords(1, true)
    newRecord.name = 'Test test' 
    records = insertClient(records, newRecord)

    expect(records.length).toBe(3)
    expect(records[0].name).toBe('Test test')
  })
})