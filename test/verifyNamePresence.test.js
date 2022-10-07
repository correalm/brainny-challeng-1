import { verifyNamePresence } from "../src/utils/verifyNamePresence";
import { buildRecords } from "../src/utils/buildRecords";

const records = buildRecords(2)
records[0].name = 'Test test'
records[1].name = 'Other test'

describe('verifyNamePresence function', () => {
  it('Should return true', () => {
    const verify = verifyNamePresence(records, 'Test test')

    expect(verify).toBe(true)
  })

  it('Should return true', () => {
    const verify = verifyNamePresence(records, 'Other test')

    expect(verify).toBe(true)
  })

  it('Should return false', () => {
    const verify = verifyNamePresence(records, 'Other')

    expect(verify).toBe(false)
  })

  it('Should return false', () => {
    const verify = verifyNamePresence(records, 'More test')

    expect(verify).toBe(false)
  })
})