import {
  gameOver,
  squareClicked,
  resetBoardClicked,
  resetGameClicked,
  xWon,
  oWon,
  increaseGameLengthClicked,
  decreaseGameLengthClicked,
  gameLengthMet
} from './actions'

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
} from './constants'

import { initialState, rootReducer } from './reducers'

import {
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  getGameLength,
  getOScore,
  getXScore,
  getGameLengthWinner
} from './selectors'

import { gameLengthInBounds } from './domain'

import configureStore from './store'

export {
  configureStore,
  GAME_OVER,
  gameOver,
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  getGameLength,
  getXScore,
  getOScore,
  getGameLengthWinner,
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
  INCREASE_GAME_LENGTH_CLICKED,
  DECREASE_GAME_LENGTH_CLICKED,
  increaseGameLengthClicked,
  decreaseGameLengthClicked,
  gameLengthInBounds,
  GAME_LENGTH_MET,
  gameLengthMet
}
