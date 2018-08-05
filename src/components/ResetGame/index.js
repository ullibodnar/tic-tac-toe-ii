import React from 'react'
import { StyledButtonCritical } from '../styled'

export default function ResetGame ({ handleClick }) {
  return (
    <StyledButtonCritical onClick={handleClick}>
      Reset Game
    </StyledButtonCritical>
  )
}
