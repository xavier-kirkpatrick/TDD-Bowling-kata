export { scoreFrame }

function scoreFrame(frame, nextFrame, thirdFrame) {
  const addNormalFrame = frame.reduce((total, ball) => total + ball, 0)

  // Strike on the last frame
  if (frame.length === 3) {
    return frame[0] + frame[1] + frame[2]
  }

  // Double strike
  else if (frame[0] === 10 && nextFrame[0] === 10) {
    return addNormalFrame + nextFrame[0] + thirdFrame[0]
  }

  // Single Strike
  else if (frame[0] === 10) {
    return addNormalFrame + nextFrame[0] + nextFrame[1]
  }

  //Spare
  else if (frame[0] + frame[1] === 10) {
    return addNormalFrame + nextFrame[0]
  }

  // Normal
  else {
    return addNormalFrame
  }
}
// scoreFrame()
