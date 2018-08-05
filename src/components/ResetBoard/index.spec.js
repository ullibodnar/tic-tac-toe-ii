import React from 'react'
import { shallow } from 'enzyme'
import { ResetButton } from '../../containers'

describe('components:ResetButton', () => {
  it('renders the reset button correctly', () => {
    expect(toJson(shallow(<ResetButton />))).toMatchSnapshot()
  })
})
