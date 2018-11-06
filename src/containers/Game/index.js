import { connect } from 'react-redux'

import Game from '../../components/Game'
import { getGameLengthWinner } from '../../state'

function mapStateToProps (state) {
  const gameLengthWinner = getGameLengthWinner(state)

  return {
    winner: gameLengthWinner || null
  }
}

export default connect(mapStateToProps)(Game)
