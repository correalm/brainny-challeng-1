import { verifyLastPurchase } from "../src/utils/verifyLastPurchase";
import { buildRecords } from "../src/utils/buildRecords";

const records = buildRecords(2)
records[0].lastPurchaseDate = '1999-01-01T00:00:00.000Z'
records[1].lastPurchaseDate = '2022-01-01T00:00:00.000Z'

describe('verifyLastPurchase function', () => {
  it('Should return a array with length 1 and purchases = 10', () => {
    const client = verifyLastPurchase(records)

    expect(client.length).toBe(1)
    expect(client[0].lastPurchaseDate).toBe('1999-01-01T00:00:00.000Z')
  })
})