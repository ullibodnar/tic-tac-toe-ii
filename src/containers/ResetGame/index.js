import { connect } from 'react-redux'

import ResetGame from '../../components/ResetGame'
import { resetGameClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetGameClicked())
  }
}

export default connect(null, mapDispatchToProps)(ResetGame)
