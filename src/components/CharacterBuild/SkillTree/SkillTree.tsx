import React, { useState } from 'react'
import { SkillTreeProps } from './SkillTree.types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Skill } from './Skill/Skill'
import {
    mockSingleSkillRankZero,
    mockSingleSkillRankOne,
    mockSingleSkillFiveOutOfFive
} from "../../../models/mocks/mockSkills";
// @ts-ignore
import squareImage from '../../../assets/image/skills/storybook/square-outline-32.png'
import styled from '@emotion/styled'
import { SkillTreeRow } from './SkillTreeRow/SkillTreeRow'


const TreeRow = styled(Row)`
    margin-top: 5px;
    margin-bottom: 5px;
`

const TreeCol = styled(Col)`
    text-align: center;
`

export const SkillTree: React.FunctionComponent<SkillTreeProps> = (props) => {

    const [numberOfPointsInvested, setNumberOfPointsInvested] = useState(props.numberOfPointsInvested)

    const TreeContainer = styled(Container)`
        border-style: solid;
        width: 270px;
        background-color: ${props.colorPalette.treeColor};
    `

    const onHoverSkill = (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => {
        props.onHoverSkill(name, description, currentRankEffect, nextRankEffect)
    }

    const mockSkill = 
        <Skill 
            imagePath={squareImage} 
            skill={mockSingleSkillRankZero} 
            colorPalette={props.colorPalette} 
            onHover={onHoverSkill} 
            disabled={false}
        />

    return (
        <TreeContainer>
            {/* <SkillTreeRow
                
            /> */}
            {/* <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow>
            <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
                <TreeCol></TreeCol>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow>
            <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow>
            <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow>
            <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow>
            <TreeRow>
                <TreeCol>
                    {mockSkill}
                </TreeCol>
            </TreeRow> */}
        </TreeContainer>
    )

}