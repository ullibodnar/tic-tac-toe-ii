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

const GameLengthButton = styled.button`
  border-radius: 0;
  width: 25px;
  font-size: 22px;
  background: #191919;
  color: white;
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  margin-right: ${props => (props.children === '-' ? 10 : 0)}px;
}



`
GameLengthButton.displayName = 'StyledGameLengthButton'

export { Button, ButtonCritical, ResetBoard, GameLengthButton }
