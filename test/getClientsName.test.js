import { getClientsName } from '../src/utils/getClientsName.js'
import { buildRecords } from '../src/utils/buildRecords.js'

const records = buildRecords(2)
records[0].name = 'Test test'
records[1].name = 'Other test'

describe('getClientsName function', () => {
  it('Should return a array with length 2 and names = "Test test" and "Other test"', () => {
    const names = getClientsName(records)

    expect(names.length).toBe(2)
    expect(names[0]).toBe('Test test')
    expect(names[1]).toBe('Other test')
  })
})