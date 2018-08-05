import styled from 'styled-components'

const Score = styled.div`
  display: inline-block;
  text-align: center;
  width: 50px;
`
Score.displayName = 'StyledScore'

const ScoreCard = styled.div`
  display: inline-block;
`
ScoreCard.displayName = 'StyledScoreCard'

export { Score, ScoreCard }
