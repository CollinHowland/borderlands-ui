import React from 'react'
import { SkillTree } from './SkillTree'
import { action } from '@storybook/addon-actions';
import { SkillTreeColorPaletteEnumVO } from '../../../models/vos/SkillTreeColorPaletteEnumVO';



export default {
    title: 'Skill Tree',
    component: SkillTree,
}

export const normal = () => 
    <SkillTree 
        colorPalette={new SkillTreeColorPaletteEnumVO('BLUE')}
        numberOfPointsInvested={0}
        onHoverSkill={action('hover')}
    />