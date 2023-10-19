// This function is used to run an array (bowling frame) of numbers as a parameter and resturn a result based on the conditions.
//  The function is used purely for checking correct methods and syntax to pass tests.
//

export function letsBowl(frame, nextFrame, thirdFrame) {
  const sumFrames = frame.reduce((total, ball) => total + ball, 0)

  // Strike inside the last frame
  // In Only this test, 'frame' has three elements in its array.
  // The condition is met only when there are three internal elements and index 0 is 10.
  if (frame.length === 3 && frame[0] === 10) {
    return frame[0] + frame[1] + frame[2]
  }

  // Double strike
  // This test includes an additional frames which are needed before the sprike from can be scored.
  else if (frame[0] === 10 && nextFrame[0] === 10) {
    return sumFrames + nextFrame[0] + thirdFrame[0]
  }

  // Single Strike
  // For one strike in teh first frame, and counts the next two balls in next frame.
  else if (frame[0] === 10) {
    return sumFrames + nextFrame[0] + nextFrame[1]
  }

  //Spare
  // Condition for a spare frame which adds the first ball of the next frame.
  else if (frame[0] + frame[1] === 10) {
    return sumFrames + nextFrame[0]
  }

  // Normal frame where the two ball scores are added up to give a score for that frame.
  else {
    return sumFrames
  }
}
// scoreFrame()
