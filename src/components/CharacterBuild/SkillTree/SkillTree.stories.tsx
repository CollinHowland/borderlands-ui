import React from 'react'
import { SkillTree } from './SkillTree'
import { action } from '@storybook/addon-actions';
import { SkillTreeColorPaletteEnumVO } from '../../../models/vos/SkillTreeColorPaletteEnumVO';
import { mockSkillTreeSkills } from '../../../models/mocks/mockSkills';



export default {
    title: 'Skill Tree',
    component: SkillTree,
}

export const orange = () => 
    <SkillTree 
        name="Demolition Woman"
        colorPalette={new SkillTreeColorPaletteEnumVO('ORANGE')}
        numberOfPointsInvested={0}
        skills={mockSkillTreeSkills}

        onHoverSkill={action('hover')}
    />

export const blue = () => 
    <SkillTree 
        name="Shield of Retribution"
        colorPalette={new SkillTreeColorPaletteEnumVO('BLUE')}
        numberOfPointsInvested={0}
        skills={mockSkillTreeSkills}

        onHoverSkill={action('hover')}
    />

export const green = () => 
    <SkillTree 
        name="Bottomless Mags"
        colorPalette={new SkillTreeColorPaletteEnumVO('GREEN')}
        numberOfPointsInvested={0}
        skills={mockSkillTreeSkills}

        onHoverSkill={action('hover')}
    />