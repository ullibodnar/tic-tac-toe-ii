import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { head, length, union } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import {
  getMoves,
  gameOver,
  SQUARE_CLICKED,
  xWon,
  oWon,
  gameLengthMet
} from '../..'
import { getBoard, getWins } from '../../../utilities'

export default function checkForWinEpic (action$, state$) {
  return action$.ofType(SQUARE_CLICKED).mergeMap(() => {
    const moves = getMoves(state$.value) // get the moves array from the store
    const plays = length(moves) // length of the moves array tells us how many plays

    /* if (plays < 5) {
      // do nothing - can't win with fewer than five plays

      return Observable.of()
    }
    */

    const board = getBoard(moves) // convert the moves array to a board array
    const wins = getWins(board) // get zero or more winning patterns

    console.log(`board: ${board}`)
    console.log(`wins: ${wins}`)

    if (isNonEmptyArray(wins)) {
      // found at least one winning pattern!
      // game over! somebody won
      // return a wrapped gameOver action with the winning squares and the player

      const squares = length(wins) < 2 ? head(wins) : union(...wins)
      const player = board[head(squares)]

      if (player === 'x') {
        return state$.value.xScore >= state$.value.gameLength - 1
          ? Observable.of(
              xWon(),
              gameOver(squares, player),
              gameLengthMet(player)
            )
          : Observable.of(xWon(), gameOver(squares, player))
      } else if (player === 'o') {
        return state$.value.oScore >= state$.value.gameLength - 1
          ? Observable.of(
              oWon(),
              gameOver(squares, player),
              gameLengthMet(player)
            )
          : Observable.of(oWon(), gameOver(squares, player))
      }

      // setTimeout(() => {
      //   return Observable.of(resetBoardClicked())
      // }, 1000)
    }

    if (plays > 8) {
      // no more squares to play
      // game over! (it's a tie)
      // return a wrapped empty gameOver action to indicate a tie

      return Observable.of(gameOver([]))
    }

    // do nothing (none of the above conditions met)
    return Observable.of()
  })
}
