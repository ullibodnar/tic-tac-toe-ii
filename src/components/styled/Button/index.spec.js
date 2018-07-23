import React from 'react'
import { shallow } from 'enzyme'

import StyledButton from '.'

describe('components:StyledButton', () => {
  it('renders the button with the correct styles', () => {
    expect(toJson(shallow(<StyledButton />))).toMatchSnapshot()
  })
})
