import React from 'react'
import { Skill } from "./Skill"
import { shallow } from "enzyme"
import { mockSingleSkillRankZero } from '../../../../models/mocks/mockSkills'

const setup = () => {
    const props = {
        imagePath: "fake-image-path",
        skill: mockSingleSkillRankZero,
    }
    const wrapper = shallow(<Skill {...props} />)
    return { ...props, wrapper }
}

describe('Skill Test', () => {

    it('renders', () => {
        setup()
    })
})