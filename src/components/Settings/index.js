import React from 'react'

import { StyledSettings, StyledGameLengthInput } from '../styled'
import { ResetGame } from '../../containers'
import { SettingsHeaderText, SettingsHeader } from './styled'

export default function Settings ({ enterGameLength }) {
  return (
    <StyledSettings>
      <SettingsHeader>
        <SettingsHeaderText>Settings:</SettingsHeaderText>

        <ResetGame />
      </SettingsHeader>

      <p>Game length: </p>
      <StyledGameLengthInput
        placeholder={'3 (default)'}
        onBlur={e => enterGameLength(e.target.value)}
      />

    </StyledSettings>
  )
}
