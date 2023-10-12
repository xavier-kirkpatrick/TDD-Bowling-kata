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

test('normal frame score', () => {
  // Arrange
  const frame = [4, 5]
  // Act
  const actual = score.scoreFrame(frame)
  const expected = 9
  // Assert
  expect(actual).toBe(expected)
})

test('frame with spares', () => {
  // Arrange
  const frame = [4, 6]
  const nextFrame = [3, 3]
  // Act
  const expected = 13
  const actual = score.scoreFrame(frame, nextFrame)
  // Assert
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  //Arrange
  const frame = [10, 0]
  const nextFrame = [2, 0]
  // Act
  const expected = 12
  const actual = score.scoreFrame(frame, nextFrame)
  // Assert
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  //Arrange
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [2, 7]
  // Act
  const expected = 22
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  // Assert
  expect(actual).toBe(expected)
})
