import { getRandomInteger } from "../src/utils/getRandomInteger";

describe('getRandomInteger function', () => {
  it('Should return an number equals to 1 or 2"', () => {
    const integer = getRandomInteger(1, 2)

    expect(typeof integer).toBe('number')
    expect(integer).toBeLessThan(3)
  })
})