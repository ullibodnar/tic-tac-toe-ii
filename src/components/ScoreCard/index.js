import React from 'react'

import { Score as StyledScore, ScoreCard as StyledScoreCard } from './style'

let firstTo = 3

export default function ScoreCard ({ xScore, oScore, state }) {
  return (
    <StyledScoreCard>
      <h2>Score: (first to {firstTo})</h2>
      <StyledScore>
        <p>X: {xScore}</p>
      </StyledScore>
      <StyledScore>
        <p>O: {oScore}</p>
        <p>{console.log(state)}</p>
      </StyledScore>
    </StyledScoreCard>
  )
}
