import styled from 'styled-components'

const BoardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'board';
  height: auto;
  width: 100%;
  margin: 0 auto;
`
BoardContainer.defaultName = 'BoardContainer'

export default BoardContainer
