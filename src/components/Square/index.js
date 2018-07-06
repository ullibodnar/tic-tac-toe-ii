import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 90%, 1);
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '3px')}
    ${({ index }) => (index < 6 ? '3px' : 0)} 0;
  cursor: not-allowed;
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
  {/*text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/}
`
StyledSquare.defaultName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  color: ${({ player }) => (player === 'x' ? '#fe3449' : '#191919')}; {/*#80FFFF*/}

`

const SquareLost = StyledSquare.extend`
  color: hsla(0, 0%, 90%, 1);
`

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`

const BlockSuggestion = SquarePlayable.extend`
  border: 1px dashed red;
`

export default function Square ({
  handleClick,
  index,
  isWinningSquare,
  player,
  isBlockableSquare
}) {
  if (isUndefined(isWinningSquare)) {
    return isUndefined(player)
      ? isUndefined(isBlockableSquare)
          ? <SquarePlayable index={index} onClick={handleClick} />
          : <BlockSuggestion index={index} onClick={handleClick} />
      : <SquarePlayed index={index} player={player}>{player}</SquarePlayed>
  }

  return isWinningSquare
    ? <SquarePlayed index={index} player={player}>{player}</SquarePlayed>
    : <SquareLost index={index} player={player}>{player}</SquareLost>
}
