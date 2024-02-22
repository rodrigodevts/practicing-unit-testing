import { expect, test } from 'vitest'
import { getFutureDate } from './get-future-date'

test('increases date with onde year', () => {
  const year = new Date().getFullYear() + 1
  expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(year)
})
