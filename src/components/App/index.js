import React from 'react'
import { times } from 'ramda'

import { StyledAppContainer, Board, BoardContainer, ScoreCard } from '..'
import { Square, ResetButton } from '../../containers'

import { scoreO, scoreX } from '../../state'

const appName = 'Tic-Tac-Toe Mk. II'

export default function App () {
  return (
    <div>
      {/* outer div */}

      <StyledAppContainer className='headerDiv'>
        <h1 className='headerText'>{appName}</h1>
      </StyledAppContainer>

      <StyledAppContainer className='StyledAppContainer'>
        <ResetButton />
        
        <h2>Score:</h2>
        <ScoreCard>
          <p className='score'>X: {scoreX}</p>
        </ScoreCard>
        <ScoreCard>
          <p className='score'>O: {scoreO}</p>
        </ScoreCard>
        
        <BoardContainer className='BoardContainer'>
          <Board className='Board'>
            {times(square => <Square key={square} index={square} />, 9)}
          </Board>
        </BoardContainer>
      </StyledAppContainer>

      
      <StyledAppContainer>
        <h1>Settings:</h1>
        <p>None, yet!</p>
      </StyledAppContainer>

      {/* outer div */}
    </div>
  )
}
