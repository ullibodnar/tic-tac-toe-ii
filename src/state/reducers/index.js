import { isUndefined } from 'ramda-adjunct'

import { GAME_OVER, SQUARE_CLICKED, RESET_CLICKED, BLOCK_AVAILABLE } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  const {
    square,
    block: { blockableSquares, blockablePlayer } = {},
    winners: { squares, player } = {}
  } = payload

  switch (type) {
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

    case BLOCK_AVAILABLE:
      return {
        ...state,
        blockableSquares: blockableSquares,
        blockablePlayer: blockablePlayer
      }

    case RESET_CLICKED:
      return initialState

    default:
      return state
  }
}

export { initialState, rootReducer }
