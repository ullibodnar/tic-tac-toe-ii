import { connect } from 'react-redux'

import ScoreCard from '../../components/ScoreCard'

console.log(ScoreCard)

function mapStateToProps (state) {
  return {
    xScore: state.xScore,
    oScore: state.oScore,
    state: state
  }
}

export default connect(mapStateToProps)(ScoreCard)
