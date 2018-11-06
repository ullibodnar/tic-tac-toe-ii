import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

export default function checkForGameLength (action$, state$) {
  return action$.ofType(GAME_OVER).mergeMap(() => {})
}
