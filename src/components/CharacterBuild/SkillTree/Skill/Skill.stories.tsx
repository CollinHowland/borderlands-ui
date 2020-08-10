import React from 'react'
import { Skill } from './Skill'
import { 
    mockSingleSkillRankZero, 
    mockSingleSkillRankOne, 
    mockSingleSkillFiveOutOfFive 
} from "../../../../models/mocks/mockSkills";
// @ts-ignore
import squareImage from '../../../../assets/image/skills/storybook/square-outline-32.png'
import { SkillTreeColorPaletteEnumVO } from '../../../../models/vos/SkillTreeColorPaletteEnumVO';
import { action } from '@storybook/addon-actions';


const colorPalette = new SkillTreeColorPaletteEnumVO('BLUE')

export default {
    title: 'Skill',
    component: Skill,
}

export const rankZero = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillRankZero}
        colorPalette={colorPalette}
        onHover={action('hover')}
        disabled={false}
    />

export const rankOne = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillRankOne}
        colorPalette={colorPalette}
        onHover={action('hover')}
        disabled={false}
    />

export const rankFiveOutOfFive = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillFiveOutOfFive}
        colorPalette={colorPalette}
        onHover={action('hover')}
        disabled={false}
    />

export const disabled = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillRankZero}
        colorPalette={colorPalette}
        onHover={action('hover')}
        disabled={true}
    />