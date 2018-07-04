import { connect } from 'react-redux'
import { contains } from 'ramda'
// import { isNotEmpty } from 'ramda-adjunct'

import Square from '../../components/Square'
import {
  getMoves,
  getWinningSquares,
  squareClicked,
  getBlockableSquare
} from '../../state'
import { getPlayer } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const winners = getWinningSquares(state) || null // []
  const block = getBlockableSquare(state) || null
  const blockAvailable = !!block
  const gameIsOver = !!winners // isNotEmpty(winners)
  const player = getPlayer(index, moves)

  if (blockAvailable) {
    return { player, index }
  }
  if (gameIsOver) {
    return { player, isWinningSquare: contains(index, winners) }
  }
  return { player }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
