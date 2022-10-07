import { sumOfSells } from '../src/utils/sumOfSells.js'
import { buildRecords } from '../src/utils/buildRecords.js'

const records = buildRecords(2)
records[0].countPurchase = 1
records[1].countPurchase = 1

describe('sumOfSells function', () => {
  it('Should return 2"', () => {
    const sum = sumOfSells(records)

    expect(sum).toBe(2)
  })
})