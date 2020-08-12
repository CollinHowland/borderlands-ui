import React from 'react'
import { Skill } from './Skill'
import { 
    mockSingleSkillRankZero, 
    mockSingleSkillRankOne, 
    mockSingleSkillFiveOutOfFive, 
    mockSingleSkillWithImage,
    mockSingleSkillRankOneWithImage,
    mockSingleSkillRankFiveWithImage,
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
        // imagePath={squareImage} 
        skillId={0}
        skill={mockSingleSkillWithImage}
        colorPalette={colorPalette}
        disabled={false}

        onHover={action('hover')}
        onSkillRankIncreased={action('skill rank changed')}
    />

export const rankOne = () => 
    <Skill 
        // imagePath={squareImage} 
        skillId={0}
        skill={mockSingleSkillRankOneWithImage}
        colorPalette={colorPalette}
        disabled={false}

        onHover={action('hover')}
        onSkillRankIncreased={action('skill rank changed')}
    />

export const rankFiveOutOfFive = () => 
    <Skill 
        // imagePath={squareImage} 
        skillId={0}
        skill={mockSingleSkillRankFiveWithImage}
        colorPalette={colorPalette}
        disabled={false}

        onHover={action('hover')}
        onSkillRankIncreased={action('skill rank changed')}
    />

export const disabled = () => 
    <Skill 
        // imagePath={squareImage} 
        skillId={0}
        skill={mockSingleSkillWithImage}
        colorPalette={colorPalette}
        disabled={true}

        onHover={action('hover')}
        onSkillRankIncreased={action('skill rank changed')}
    />