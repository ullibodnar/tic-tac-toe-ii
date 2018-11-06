import React from 'react'

import { Score as StyledScore, ScoreCard as StyledScoreCard } from './style'

export default function ScoreCard ({ xScore, oScore, gameLength }) {
  return (
    <StyledScoreCard>
      <h2>Score: (first to {gameLength})</h2>
      <StyledScore>
        <p>X: {xScore}</p>
      </StyledScore>
      <StyledScore>
        <p>O: {oScore}</p>
      </StyledScore>
    </StyledScoreCard>
  )
}
