import React from 'react'

import { StyledSettings, StyledGameLengthButton } from '../styled'
import { ResetGame } from '../../containers'
import {
  SettingsHeaderText,
  SettingsHeader,
  GameLengthContainer
} from './styled'

export default function Settings ({
  increaseGameLength,
  decreaseGameLength,
  gameLength
}) {
  return (
    <StyledSettings>
      <SettingsHeader>
        <SettingsHeaderText>Settings:</SettingsHeaderText>

        <ResetGame />
      </SettingsHeader>
      <GameLengthContainer>
        <p>Game length: first to </p>
        <StyledGameLengthButton onClick={decreaseGameLength}>
          -
        </StyledGameLengthButton>
        <p>{gameLength}</p>
        <StyledGameLengthButton onClick={increaseGameLength}>
          +
        </StyledGameLengthButton>
      </GameLengthContainer>

    </StyledSettings>
  )
}
