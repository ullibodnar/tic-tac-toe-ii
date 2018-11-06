import React from 'react'

import { StyledHeader } from '../styled'

export default function Header ({ name }) {
  return (
    <StyledHeader name={name}>
      <h1>{name}</h1>
    </StyledHeader>
  )
}
