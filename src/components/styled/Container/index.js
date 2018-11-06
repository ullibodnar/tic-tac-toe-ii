import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: auto;
  color: #191919;
  margin: 0 auto 20px auto;
  padding: 40px;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  & p {
    font-size: 18px;
  }

  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`
Container.displayName = 'StyledContainer'

export const Header = Container.extend`
  border-color: #fe3449;
  border-width: 0 2px 2px 2px;
  border-style: dashed;
  font-size: 3em;
  text-align: center;
`
Header.displayName = 'StyledHeader'

export const Game = Container.extend`
`
Game.displayName = 'StyledGame'

export const Settings = Container.extend`
  font-size: 18px;
`
Settings.displayName = 'StyledSettings'
