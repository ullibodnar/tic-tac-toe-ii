import {
  gameOver,
  squareClicked,
  resetBoardClicked,
  resetGameClicked,
  xWon,
  oWon,
  gameLengthChange
} from './actions'

import {
  GAME_OVER,
  SQUARE_CLICKED,
  RESET_BOARD_CLICKED,
  RESET_GAME_CLICKED,
  X_WON,
  O_WON,
  GAME_LENGTH_CHANGE
} from './constants'

import { initialState, rootReducer } from './reducers'

import { getMoves, getWinningPlayer, getWinningSquares } from './selectors'

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
  RESET_BOARD_CLICKED,
  RESET_GAME_CLICKED,
  resetBoardClicked,
  resetGameClicked,
  X_WON,
  O_WON,
  xWon,
  oWon,
  GAME_LENGTH_CHANGE,
  gameLengthChange
}
