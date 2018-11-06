import { connect } from 'react-redux'
import { contains } from 'ramda'
// import { isNotEmpty } from 'ramda-adjunct'

import Square from '../../components/Square'
import { getMoves, getWinningSquares, squareClicked } from '../../state'
import { getPlayer } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const winners = getWinningSquares(state) || null // []
  const gameIsOver = !!winners // isNotEmpty(winners)
  const player = getPlayer(index, moves)

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
