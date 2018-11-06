import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_BOARD_CLICKED,
  RESET_GAME_CLICKED,
  X_WON,
  O_WON,
  INCREASE_GAME_LENGTH_CLICKED,
  DECREASE_GAME_LENGTH_CLICKED,
  GAME_LENGTH_MET
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

function increaseGameLengthClicked () {
  return {
    type: INCREASE_GAME_LENGTH_CLICKED
  }
}

function decreaseGameLengthClicked () {
  return {
    type: DECREASE_GAME_LENGTH_CLICKED
  }
}

function gameLengthMet (winner) {
  return {
    type: GAME_LENGTH_MET,
    payload: {
      winner
    }
  }
}

export {
  gameOver,
  squareClicked,
  resetBoardClicked,
  resetGameClicked,
  xWon,
  oWon,
  increaseGameLengthClicked,
  decreaseGameLengthClicked,
  gameLengthMet
}
