import React from 'react'
import { times } from 'ramda'

import { StyledGame } from '../styled'
import { Board, BoardContainer, ScoreCard } from '..'
import { Square, ResetButton } from '../../containers'

export default function Game () {
  return (
    <StyledGame>
      <ResetButton />

      <ScoreCard />

      <BoardContainer>
        <Board>
          {times(square => <Square key={square} index={square} />, 9)}
        </Board>
      </BoardContainer>
    </StyledGame>
  )
}
