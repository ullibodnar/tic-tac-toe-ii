import getBlock from '.'

describe('utilities:getBlock', () => {
  it('returns an empty array if there are no blockable squares', () => {
    const board = [
      'x',
      'o',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ]
    const blockableSquares = []

    expect(getBlock(board)).toEqual(blockableSquares)
  })

  it('returns an array with the blockable squares when there is one square to block', () => {
    const board = [
      'x',
      'o',
      'x',
      undefined,
      'o',
      undefined,
      undefined,
      undefined,
      undefined
    ]
    const blockableSquares = [7]

    expect(getBlock(board)).toEqual(blockableSquares)
  })

  it('returns an array with the blockable squares when there are two or more squares to block', () => {
    const board = [
      'x',
      'o',
      'x',
      'o',
      'x',
      undefined,
      undefined,
      undefined,
      undefined
    ]
    const blockableSquares = [6, 8]

    expect(getBlock(board)).toEqual(blockableSquares)
  })
})
