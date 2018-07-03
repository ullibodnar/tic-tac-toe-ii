import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: #191919;
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '3px')}
    ${({ index }) => (index < 6 ? '3px' : 0)} 0;
  cursor: default;
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
  {/*text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/}
`
StyledSquare.defaultName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  color: ${({ player }) => (player === 'x' ? '#FF8080' : '#80FFFF')};

`

const BlockSuggestion = StyledSquare.extend`
  border: 1px dashed red;
`

const SquareLost = StyledSquare.extend`
  color: hsla(0, 0%, 90%, 1);
`

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`

export default function Square ({
  handleClick,
  index,
  isWinningSquare,
  player
}) {
  if (isUndefined(isWinningSquare)) {
    return isUndefined(player)
      ? <SquarePlayable index={index} onClick={handleClick} />
      : <SquarePlayed index={index} player={player}>{player}</SquarePlayed>
  }

  if (isUndefined(player)) {
    return <StyledSquare index={index} />
  }

  return isWinningSquare
    ? <SquarePlayed index={index} player={player}>{player}</SquarePlayed>
    : <SquareLost index={index} player={player}>{player}</SquareLost>
}
