import { connect } from 'react-redux'

import ResetBoard from '../../components/ResetBoard'
import { resetBoardClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetBoardClicked())
  }
}

export default connect(null, mapDispatchToProps)(ResetBoard)
