import styled from 'styled-components'

const Button = styled.button`
  border-radius: 0;
  padding: 10px 15px;
  font-size: 22px;
  background: #191919;
  color: white;
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: 0.4s ease;
  float: right;
  vertical-align: middle;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
    
  }

  &:focus {
    outline: none;
  }
`
Button.displayName = 'StyledButton'

const ResetBoard = Button.extend`
  
`
ResetBoard.displayName = 'StyledResetBoard'

const ButtonCritical = Button.extend`
  &:hover {
    background: #fe3449;
  }
`
ButtonCritical.displayName = 'StyledButtonCritical'

export { Button, ButtonCritical, ResetBoard }
