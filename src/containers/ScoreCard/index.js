import { connect } from 'react-redux'

import ScoreCard from '../../components/ScoreCard'
import { getGameLength, getOScore, getXScore } from '../../state'

function mapStateToProps (state) {
  return {
    gameLength: getGameLength(state),
    oScore: getOScore(state),
    xScore: getXScore(state)
  }
}

export default connect(mapStateToProps)(ScoreCard)
