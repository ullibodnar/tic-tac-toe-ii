import React from 'react'

import { Header } from '..'
import { Settings, Game } from '../../containers'

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
