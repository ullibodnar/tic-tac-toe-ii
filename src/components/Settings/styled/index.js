import styled from 'styled-components'

const SettingsHeader = styled.div`
  margin-bottom: 20px;
`
SettingsHeader.displayName = 'StyledSettingsHeader'

const SettingsHeaderText = styled.h1`
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 1px solid hsla(0, 0%, 90%, 1);
`
SettingsHeaderText.displayName = 'SettingsHeaderText'

export { SettingsHeader, SettingsHeaderText }
