import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { AppContainer, Board } from '..'
import { Square, ResetButton } from '../../containers'

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 80vh;
  margin: 0 auto 40px auto;
  padding: 0;
  width: 80vw;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media only screen and (max-width: 700px) {
    margin: 0;
    width: 100vw;
    height: 100vw;
  }
`
StyledApp.defaultName = 'StyledApp'

export default function App () {
  return (
    <div>
      {/* outer div */}

      <AppContainer />

      <StyledApp>
        <Board>
          {times(square => <Square key={square} index={square} />, 9)}
        </Board>
      </StyledApp>

      <ResetButton />

      {/* outer div */}
    </div>
  )
}
