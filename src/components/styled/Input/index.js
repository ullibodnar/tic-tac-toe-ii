import styled from 'styled-components'

const Input = styled.input`
  padding: 10px;
  border-radius: none;
  font-size: 18px;
  width: auto;
  box-shadow: none;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  &:focus {
    outline: none;
  }
`
Input.displayName = 'StyledInput'

export { Input }
