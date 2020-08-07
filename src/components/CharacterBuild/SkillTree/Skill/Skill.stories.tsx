import React from 'react'
import { Skill } from './Skill'
import { 
    mockSingleSkillRankZero, 
    mockSingleSkillRankOne, 
    mockSingleSkillFiveOutOfFive 
} from "../../../../models/mocks/mockSkills";
// @ts-ignore
import squareImage from '../../../../assets/image/skills/storybook/square-outline-32.png'

export default {
    title: 'Skill',
    component: Skill,
}

export const rankZero = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillRankZero}
    />

export const rankOne = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillRankOne}
    />

export const rankFiveOutOfFive = () => 
    <Skill 
        imagePath={squareImage} 
        skill={mockSingleSkillFiveOutOfFive}
    />