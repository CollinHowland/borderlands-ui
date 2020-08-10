import React from 'react'
import { Skill } from "./Skill"
import { shallow } from "enzyme"
import { mockSingleSkillRankZero } from '../../../../models/mocks/mockSkills'
import { SkillTreeColorPaletteEnumVO } from '../../../../models/vos/SkillTreeColorPaletteEnumVO'

const setup = () => {
    const props = {
        imagePath: "fake-image-path",
        skill: mockSingleSkillRankZero,
        colorPalette: new SkillTreeColorPaletteEnumVO('BLUE'),
        disabled: false,
        onHover: jest.fn()
    }
    const wrapper = shallow(<Skill {...props} />)
    return { ...props, wrapper }
}

describe('Skill Test', () => {

    it('renders', () => {
        setup()
    })

    // it('onHover is called when mouse hovers', () => {
    //     const { wrapper } = setup()
    // })
})