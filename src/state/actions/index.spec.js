import { gameOver, squareClicked, resetClicked, blockAvailable } from '.'
import { GAME_OVER, SQUARE_CLICKED, RESET_CLICKED, BLOCK_AVAILABLE } from '..'

describe('state:actions', () => {
  describe('gameOver', () => {
    it('produces the correct action when the game is over', () => {
      const squares = [0, 4, 8, 2, 6]
      const player = 'x'

      expect(gameOver(squares, player)).toMatchObject({
        type: GAME_OVER,
        payload: {
          winners: {
            squares,
            player
          }
        }
      })
    })
  })

  describe('squareClicked', () => {
    it('produces the correct action for clicking a Square', () => {
      const square = 4

      expect(squareClicked(square)).toMatchObject({
        type: SQUARE_CLICKED,
        payload: {
          square: 4
        }
      })
    })
  })

  describe('blockAvailable', () => {
    it('produces the correct action when there are blocks available', () => {
      // current moves: [0, 1, 2, 3, 4], square 6 & 8 should be highlighted for o's move
      const blockableSquares = [6, 8]
      const blockablePlayer = 'x'

      expect(blockAvailable(blockableSquares, blockablePlayer)).toMatchObject({
        type: BLOCK_AVAILABLE,
        payload: {
          block: {
            blockableSquares,
            blockablePlayer
          }
        }
      })
    })
  })

  describe('resetClicked', () => {
    it('produces the correct action for clicking the reset button', () => {
      expect(resetClicked()).toMatchObject({
        type: RESET_CLICKED
      })
    })
  })
})
