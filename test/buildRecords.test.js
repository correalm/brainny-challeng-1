import { buildRecords } from "../src/utils/buildRecords.js";

describe('buildRecords function', () => {
  it('Should return a array with length 2', () => {
    const records = buildRecords(2)
    expect(records.length).toBe(2)
  })
})