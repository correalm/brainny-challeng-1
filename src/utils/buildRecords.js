import { faker } from '@faker-js/faker/locale/pt_BR'
import { getRandomInteger } from './getRandomInteger.js'

const translateGenre = (sex) => {
  if (sex === 'Feminino') {
    return 'female'
  } else {
    return 'male'
  }
}

export const buildRecords = (times) => {
  const records = []

  for (let i = 0; i < times ; i++) {
    const genre = faker.name.sex()
    const record  = {
      name: faker.name.fullName({
        sex: translateGenre(genre)
      }),
      birthday: faker.date.birthdate({
        max: 2006,
        min: 1910,
        mode: 'year'
      }),
      genre: genre,
      lastPurchaseDate: faker.date.between('1999-01-01T00:00:00.000Z', Date.now()),
      countPurchase: faker.random.numeric(getRandomInteger(1, 3))
    }
    records.push(record)
  }

  return records
}