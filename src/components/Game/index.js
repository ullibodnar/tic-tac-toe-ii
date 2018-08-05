import React from 'react'
import { times } from 'ramda'

import { StyledGame } from '../styled'
import { Board, BoardContainer } from '..'
import { Square, ResetBoard } from '../../containers'

import { ScoreCard } from '../../containers'

export default function Game () {
  return (
    <StyledGame>

      <div>
        <ScoreCard />

        <ResetBoard />
      </div>

      <BoardContainer>
        <Board>
          {times(square => <Square key={square} index={square} />, 9)}
        </Board>
      </BoardContainer>
    </StyledGame>
  )
}
