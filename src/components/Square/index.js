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
  color: ${({ player }) => (player === 'x' ? '#fe3449' : '#191919')}; {/*#80FFFF*/}
  /*transition: all .3s cubic-bezier(.25,.8,.25,1); <-- Would be nice to have some clean transitions soon */
`
StyledSquare.defaultName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const SquareLost = StyledSquare.extend`
  color: hsla(0, 0%, 90%, 1);
`

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`

const WinningSquare = SquarePlayed.extend`
  /*text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
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

  return isWinningSquare
    ? <WinningSquare index={index} player={player}>{player}</WinningSquare>
    : <SquareLost index={index} player={player}>{player}</SquareLost>
}
