import React from 'react'

import { Header, Game } from '..'
import { Settings } from '../../containers'

export default function App () {
  return (
    <div>
      {/* outer div */}

      <Header name={'Tic-Tac-Toe Mk. II'} />

      <Game />

      <Settings />

      {/* outer div */}
    </div>
  )
}
