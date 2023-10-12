import { expect, test } from 'vitest'
import * as score from './score'

test('Try out first test, which always pass', () => {
  expect(true).toBeTruthy
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})
