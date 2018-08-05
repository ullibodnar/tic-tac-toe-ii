import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_BOARD_CLICKED,
  RESET_GAME_CLICKED,
  X_WON,
  O_WON,
  GAME_LENGTH_CHANGE
} from '..'

function xWon () {
  return {
    type: X_WON
  }
}

function oWon () {
  return {
    type: O_WON
  }
}

function gameOver (squares, player) {
  return {
    type: GAME_OVER,
    payload: {
      winners: {
        squares,
        player
      }
    }
  }
}

function squareClicked (square) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      square
    }
  }
}

function resetBoardClicked () {
  return {
    type: RESET_BOARD_CLICKED
  }
}

function resetGameClicked () {
  return {
    type: RESET_GAME_CLICKED
  }
}

function gameLengthChange (gameLength) {
  return {
    type: GAME_LENGTH_CHANGE,
    payload: gameLength
  }
}

export {
  gameOver,
  squareClicked,
  resetBoardClicked,
  resetGameClicked,
  xWon,
  oWon,
  gameLengthChange
}
