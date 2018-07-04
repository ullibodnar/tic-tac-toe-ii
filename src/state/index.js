import {
  gameOver,
  squareClicked,
  resetClicked,
  blockAvailable
} from './actions'
import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_CLICKED,
  BLOCK_AVAILABLE
} from './constants'
import { initialState, rootReducer } from './reducers'
import {
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  getBlockableSquare,
  getBlockablePlayer
} from './selectors'
import configureStore from './store'

export {
  configureStore,
  GAME_OVER,
  gameOver,
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  initialState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked,
  RESET_CLICKED,
  resetClicked,
  BLOCK_AVAILABLE,
  blockAvailable,
  getBlockableSquare,
  getBlockablePlayer
}
