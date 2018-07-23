import { initialState, rootReducer } from '.'
import { gameOver, squareClicked, resetClicked, RESET_CLICKED } from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the initialState', () => {
      expect(rootReducer(undefined, {})).toBe(initialState)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
    })

    it('handles a move by appending the Square number to the moves array', () => {
      const state = {
        moves: [4, 0]
      }

      expect(rootReducer(state, squareClicked(2))).toMatchObject({
        moves: [4, 0, 2]
      })
    })

    it('returns the state unchanged when the square is not supplied', () => {
      const state = {
        moves: [4, 0]
      }

      expect(rootReducer(state, squareClicked())).toMatchObject({
        moves: [4, 0]
      })
    })

    it('adds the winningSquares and the winningPlayer, if any, on GAME_OVER', () => {
      const state = {
        moves: [0, 1, 2, 3, 4, 5, 6]
      }

      expect(rootReducer(state, gameOver([2, 4, 6], 'x'))).toMatchObject({
        moves: [0, 1, 2, 3, 4, 5, 6],
        winningSquares: [2, 4, 6],
        winningPlayer: 'x'
      })
    })

    it('')

    it('returns initialState when reset button is clicked', () => {
      expect(rootReducer(resetClicked(), {})).toMatchObject({
        type: 'RESET_CLICKED'
      })
    })
  })
})
