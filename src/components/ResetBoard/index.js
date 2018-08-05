import React from 'react'
import { StyledResetBoard } from '../styled'

export default function ResetBoard ({ handleClick }) {
  return <StyledResetBoard onClick={handleClick}>Clear Moves</StyledResetBoard>
}
