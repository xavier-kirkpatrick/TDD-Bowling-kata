export { scoreFrame }

function scoreFrame(frame, nextFrame) {
  const normalScore = frame.reduce((total, ball) => total + ball, 0)
  // Single Strike

  if (frame[0] === 10) {
    return normalScore + nextFrame[0] + nextFrame[1]
  }

  //Spare
  if (frame[0] + frame[1] === 10) {
    return normalScore + nextFrame[0]
  }

  // Normal
  return normalScore
}