import { getGameLength } from '..'

function gameLengthInBounds (state, request) {
  const gameLength = getGameLength(state)

  if (request !== 0) {
    return request
  } else {
    return gameLength
  }
}

export { gameLengthInBounds }
