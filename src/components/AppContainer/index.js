import React from 'react'
import styled from 'styled-components'

import '../theme/global-styles'

const appName = 'Tic-Tac-Toe MK. II'

const StyledAppContainer = styled.div`
  padding: 40px;
  margin: 40px;
  width: 60%;
  margin: auto;
  text-align: center;
  font-family: 'Custom Family', Arial, Helvetica, sans-serif;
  color: #191919;
`

export default function AppContainer () {
  return (
    <StyledAppContainer>
      <h1 className='headerText'>{appName}</h1>
      <p>hi</p>
    </StyledAppContainer>
  )
}

AppContainer.displayName = 'AppContainer'
