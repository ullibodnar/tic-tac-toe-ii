import { isUndefined } from 'ramda-adjunct'

import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_BOARD_CLICKED,
  X_WON,
  O_WON,
  RESET_GAME_CLICKED,
  INCREASE_GAME_LENGTH_CLICKED,
  DECREASE_GAME_LENGTH_CLICKED,
  gameLengthInBounds,
  GAME_LENGTH_MET
} from '..'

const initialState = {
  moves: [],
  xScore: 0,
  oScore: 0,
  gameLength: 3
}

function rootReducer (state = initialState, { payload = {}, type }) {
  const { square, winners: { squares, player } = {}, winner } = payload

  switch (type) {
    case INCREASE_GAME_LENGTH_CLICKED:
      return {
        ...state,
        gameLength: gameLengthInBounds(state, state.gameLength + 1)
      }

    case DECREASE_GAME_LENGTH_CLICKED:
      return {
        ...state,
        gameLength: gameLengthInBounds(state, state.gameLength - 1)
      }

    case X_WON:
      return {
        ...state,
        xScore: state.xScore + 1
      }

    case O_WON:
      return {
        ...state,
        oScore: state.oScore + 1
      }

    case GAME_OVER:
      return {
        ...state,
        winningSquares: squares,
        winningPlayer: player
      }

    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(square) ? state.moves : [...state.moves, square]
      }

    case RESET_BOARD_CLICKED:
      return {
        ...state,
        moves: [],
        winningSquares: undefined,
        winningPlayer: ''
      }

    case GAME_LENGTH_MET:
      return {
        ...state,
        gameLengthWinner: winner
      }

    case RESET_GAME_CLICKED:
      return initialState

    default:
      return state
  }
}

export { initialState, rootReducer }
