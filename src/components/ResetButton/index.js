import React from 'react'
import styled from 'styled-components'

const StyledResetButton = styled.button`

  display: inline-block;
  border-radius: 0;
  padding: 10px 15px;
  margin: 10px auto 40px auto;
  font-size: 22px;
  background: #191919;
  color: #e2e1e0;
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
    
  }

  &:focus {
    outline: none;
  }
`
StyledResetButton.defaultName = 'StyledResetButton'

export default function ResetButton ({ handleClick }) {
  return <StyledResetButton onClick={handleClick}>Reset Game</StyledResetButton>
}
