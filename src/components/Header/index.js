import React from 'react'

import { StyledHeader } from '../styled'

export default function Header (props) {
  return (
    <StyledHeader name={props.name}>
      <h1>{props.name}</h1>
    </StyledHeader>
  )
}
