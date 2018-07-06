import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 0;
  padding: 10px 15px;
  font-size: 22px;
  background: #191919;
  color: #e2e1e0;
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
    
  }

  &:focus {
    outline: none;
  }
`
StyledButton.defaultName = 'StyledButton'

export default StyledButton
