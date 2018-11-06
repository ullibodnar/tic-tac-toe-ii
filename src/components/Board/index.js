import styled from 'styled-components'

/* import { BOARD_SIZE } from '../variables' */

/* let viewWidth = window.innerWidth */

const Board = styled.div`
  align-self: center;
  display: grid;
  grid-area: 'board';
  grid-gap: 0;
  grid-template-areas: 
  'zero one two' 
  'three four five' 
  'six seven eight';
  grid-template-columns: 20vh 20vh 20vh;
  grid-template-rows: 20vh 20vh 20vh;
  justify-self: center;
  margin: 20px auto 0 auto;
  
  
`
Board.defaultName = 'Board'

export default Board
