import { connect } from 'react-redux'

import Settings from '../../components/Settings'
import {
  increaseGameLengthClicked,
  decreaseGameLengthClicked
} from '../../state'

import { getGameLength } from '../../state'

function mapStateToProps (state) {
  return {
    gameLength: getGameLength(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increaseGameLength: () => dispatch(increaseGameLengthClicked()),
    decreaseGameLength: () => dispatch(decreaseGameLengthClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
