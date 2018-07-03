import React from 'react'
import { shallow } from 'enzyme'

import Square from '.'

describe('components:Square', () => {
  it('renders the Square with the proper cursor if a click handler is provided', () => {
    expect(
      toJson(shallow(<Square handleClick={() => null} index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player O in the top left square', () => {
    expect(
      toJson(shallow(<Square player='o' index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X in the top left square', () => {
    expect(
      toJson(shallow(<Square player='x' index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X in the top right square', () => {
    expect(
      toJson(shallow(<Square player='x' index={2} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X in the bottom left square', () => {
    expect(
      toJson(shallow(<Square player='x' index={6} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X in the bottom right square', () => {
    expect(
      toJson(shallow(<Square player='x' index={8} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X win', () => {
    expect(
      toJson(shallow(<Square player='x' index={8} isWinningSquare />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player O loss', () => {
    expect(
      toJson(
        shallow(<Square player='o' index={8} isWinningSquare={false} />).dive()
      )
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for an unplayed square after game over', () => {
    expect(
      toJson(shallow(<Square index={4} isWinningSquare={false} />).dive())
    ).toMatchSnapshot()
  })
})
