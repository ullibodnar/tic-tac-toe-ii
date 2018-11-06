import React from 'react'
import { shallow } from 'enzyme'

import StyledContainer from '.'

describe('components:Container', () => {
  it('renders the correct styles for the StyledContainer', () => {
    const wrapper = shallow(<StyledContainer />)
    const tree = toJson(wrapper)

    expect(tree).toMatchSnapshot()
    expect(
      tree
    ).toHaveStyleRule(
      'margin',
      '0 auto 20px auto',
      'width',
      '100vw',
      'height',
      '100vh',
      {
        media: 'only screen and (max-width: 600px)'
      }
    )
  })
})
