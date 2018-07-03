import React from 'react'
import { shallow } from 'enzyme'

import AppHeader from '.'

describe('components:AppHeader', () => {
  it('renders the AppHeader with the correct styles', () => {
    expect(toJson(shallow(<AppHeader />).dive())).toMatchSnapshot()
  })
})
