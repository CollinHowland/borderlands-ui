import React from 'react'
import { SkillTree } from "./SkillTree"
import { shallow } from "enzyme"
import { SkillTreeColorPaletteEnumVO } from '../../../models/vos/SkillTreeColorPaletteEnumVO'

const setup = () => {
    const props = {
        colorPalette: new SkillTreeColorPaletteEnumVO('BLUE'),
        numberOfPointsInvested: 0,
        onHoverSkill: jest.fn(),
    }
    const wrapper = shallow(<SkillTree {...props} />)
    return { ...props, wrapper }
}

describe('SkillTree Test', () => {

    it('renders', () => {
        setup()
    })
})