import { isUndefined } from 'ramda-adjunct'

import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_BOARD_CLICKED,
  X_WON,
  O_WON,
  RESET_GAME_CLICKED,
  GAME_LENGTH_CHANGE
} from '..'

const initialState = {
  moves: [],
  xScore: 0,
  oScore: 0,
  gameLength: 3
}

function rootReducer (state = initialState, { payload = {}, type }) {
  const { square, winners: { squares, player } = {} } = payload

  switch (type) {
    case GAME_LENGTH_CHANGE:
      return {
        ...state,
        gameLength: payload
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

    case RESET_GAME_CLICKED:
      return initialState

    default:
      return state
  }
}

export { initialState, rootReducer }
