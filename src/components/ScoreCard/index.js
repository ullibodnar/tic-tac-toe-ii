import React from 'react'

import StyledScoreCard from './style'

export default function ScoreCard (props) {
  return (
    <div>
      <h2>Score:</h2>
      <StyledScoreCard>
        <p score={props.scoreX}>X: {props.scoreX}</p>
      </StyledScoreCard>
      <StyledScoreCard>
        <p score={props.scoreO}>O: {props.scoreO}</p>
      </StyledScoreCard>
    </div>
  )
}
