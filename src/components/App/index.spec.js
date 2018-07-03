import React from 'react'
import { shallow } from 'enzyme'

import App, { StyledApp } from '.'

describe('components:App', () => {
  it('renders the App with a blank game board and nine squares', () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot()
  })

  it('renders the styles for the StyledApp', () => {
    const tree = toJson(shallow(<App />).find(StyledApp).dive())

    expect(tree).toMatchSnapshot()
    expect(
      tree
    ).toHaveStyleRule('margin', 'auto', 'width', '100vw', 'height', '100vh', {
      media: 'only screen and (max-width: 600px)'
    })
  })

  it('renders the App with a game board three moves: center, top-left, top-right', () => {
    expect(toJson(shallow(<App moves={[4, 0, 2]} />))).toMatchSnapshot()
  })
})
