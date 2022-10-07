import { buildRecords } from "../src/utils/buildRecords.js";
import { getClientsByPurchases } from "../src/utils/getClientsByPurchases.js";

const records = buildRecords(2)
records[0].countPurchase = 1
records[1].countPurchase = 20

describe('getClientsByPurchases function', () => {
  it('Should return a array with length 1 and purchases = 10', () => {
    const client = getClientsByPurchases(records)

    expect(client.length).toBe(1)
    expect(client[0].countPurchase).toBe(20)
  })

  it('Should return a array with length 0', () => {
    records[0].countPurchase = 1
    records[1].countPurchase = 1

    const client = getClientsByPurchases(records)
    
    expect(client.length).toBe(0)
  })
})