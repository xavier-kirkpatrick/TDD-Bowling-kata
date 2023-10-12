export { scoreFrame }

function scoreFrame(frame) {
  return frame.reduce((total, ball) => total + ball, 0)
}
