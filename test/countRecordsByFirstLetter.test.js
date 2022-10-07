import { countRecordsByFirstLetter } from "../src/utils/countRecordsByFirstLetter";
import { buildRecords } from "../src/utils/buildRecords.js";


const records = buildRecords(2)
records[0].name = 'Test test'
records[1].name = 'Other test'


describe('getClientsByFirstLetter function', () => {
  it('Should return 1', () => {
    const numberOfClients = countRecordsByFirstLetter(records, 't')
    
    expect(numberOfClients).toBe(1)
  })

  it('Should return 0', () => {
    const numberOfClients = countRecordsByFirstLetter(records, 'a')
    
    expect(numberOfClients).toBe(0)
  })
})