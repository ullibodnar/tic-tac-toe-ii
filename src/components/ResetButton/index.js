import React from 'react'
import { StyledButton } from '../styled'

export default function ResetButton ({ handleClick }) {
  return <StyledButton onClick={handleClick}>Reset Board</StyledButton>
}
