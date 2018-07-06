import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { head, length, union } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import { getMoves, gameOver, SQUARE_CLICKED, blockAvailable } from '../..'
import { getBoard, getWins, getBlock } from '../../../utilities'

let scoreX = 0
let scoreO = 0

export default function checkForWinEpic (action$, state$) {
  return action$.ofType(SQUARE_CLICKED).mergeMap(({ payload }) => {
    const moves = getMoves(state$.value) // get the moves array from the store
    const plays = length(moves) // length of the moves array tells us how many plays

    /* if (plays < 5) {
      // do nothing - can't win with fewer than five plays

      return Observable.of()
    }
    */

    const board = getBoard(moves) // convert the moves array to a board array
    const wins = getWins(board) // get zero or more winning patterns
    const block = getBlock(board)

    console.log(`board: ${board}`)
    console.log(`block: ${block}`)
    console.log(`wins: ${wins}`)

    if (isNonEmptyArray(wins)) {
      // found at least one winning pattern!
      // game over! somebody won
      // return a wrapped gameOver action with the winning squares and the player

      const squares = length(wins) < 2 ? head(wins) : union(...wins)
      const player = board[head(squares)]

      if (player === 'x') {
        scoreX++
      } else {
        scoreO++
      }

      return Observable.of(gameOver(squares, player))
    }

    if (plays > 8) {
      // no more squares to play
      // game over! (it's a tie)
      // return a wrapped empty gameOver action to indicate a tie

      return Observable.of(gameOver([]))
    }

    if (isNonEmptyArray(block)) {
      // blockable pattern
      const squares = head(block)
      const player = board[head(squares)]
      console.log(blockAvailable(squares, player))
      return Observable.of(blockAvailable(squares, player))
    }

    // do nothing (none of the above conditions met)
    return Observable.of()
  })
}

export { scoreX, scoreO }
