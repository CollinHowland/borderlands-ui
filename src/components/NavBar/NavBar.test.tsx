import React from 'react'
import { NavBar } from "./NavBar"
import { shallow } from "enzyme"

const setup = () => {
    const props = {

    }
    const wrapper = shallow(<NavBar {...props} />)
    return { ...props, wrapper }
}

describe('NavBar Test', () => {

    it('renders', () => {
        setup()
    })
})