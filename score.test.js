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

test('', () => {
  // Arrange
  const frame = [4, 5]
  // Act
  const actual = score.scoreFrame(frame)
  const expected = 9
  // Assert
  expect(actual).toBe(expected)
})
