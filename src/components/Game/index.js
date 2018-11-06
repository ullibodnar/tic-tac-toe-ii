import React from 'react'
import { times } from 'ramda'

import { StyledGame, StyledWinText } from '../styled'
import { Board, BoardContainer } from '..'
import { Square, ResetBoard, ResetGame } from '../../containers'

import { ScoreCard } from '../../containers'

export default function Game ({ winner }) {
  return (
    <StyledGame>

      <div>
        <ScoreCard />
        {winner ? <ResetGame /> : <ResetBoard />}
      </div>

      <BoardContainer>
        {winner
          ? <StyledWinText>{winner} has won! Play again?</StyledWinText>
          : null}
        <Board>

          {times(square => <Square key={square} index={square} />, 9)}
        </Board>
      </BoardContainer>

    </StyledGame>
  )
}
