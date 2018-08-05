import { connect } from 'react-redux'

import Settings from '../../components/Settings'
import { gameLengthChange } from '../../state'

// function mapStateToProps (state) {
//   return {
//     celsius: getCelsiusInput(state)
//   }
// }

function mapDispatchToProps (dispatch) {
  return {
    enterGameLength: gameLength => {
      dispatch(gameLengthChange(gameLength))
    }
  }
}

export default connect(null, mapDispatchToProps)(Settings)
