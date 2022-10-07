import { getClientsFirstNameByFirstLetter } from '../src/utils/getClientsFirstNameByFirstLetter.js'
import {buildRecords} from '../src/utils/buildRecords.js'

const records = buildRecords(2)
records[0].name = 'Test test'
records[1].name = 'Other test'

describe('getClientsByPurchases function', () => {
  it('Should return a array with length 1', () => {
    const client = getClientsFirstNameByFirstLetter(records, 't')

    expect(client.length).toBe(1)
    expect(client[0]).toBe('Test')
  })

  it('Should return a array with length 1', () => {
    const client = getClientsFirstNameByFirstLetter(records, 'O')

    expect(client.length).toBe(1)
    expect(client[0]).toBe('Other')
  })

  it('Should return a array with length 0', () => {
    const client = getClientsFirstNameByFirstLetter(records, 'a')
    
    expect(client.length).toBe(0)
  })
})