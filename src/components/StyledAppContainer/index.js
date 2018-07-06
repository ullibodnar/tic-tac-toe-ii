import styled from 'styled-components'

import '../theme/global-styles'

const StyledAppContainer = styled.div`
  width: 80%;
  margin: auto;
  color: #191919;
  margin: 0 auto 20px auto;
  padding: 40px;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`

StyledAppContainer.displayName = 'StyledAppContainer'

export default StyledAppContainer
