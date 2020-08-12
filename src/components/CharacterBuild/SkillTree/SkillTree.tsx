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
import { SkillWithImageVO } from '../../../models/vos/SkillWithImageVO'
import { SkillVO } from '../../../models/vos/SkillVO'


const TreeRow = styled(Row)`
    margin-top: 5px;
    margin-bottom: 5px;
`

const TreeCol = styled(Col)`
    text-align: center;
`

const TreeNameContainer = styled(Container)`
    text-align: center;
    color: white;
`

export const SkillTree: React.FunctionComponent<SkillTreeProps> = (props) => {

    const [numberOfPointsInvested, setNumberOfPointsInvested] = useState(props.numberOfPointsInvested ? props.numberOfPointsInvested : 0)
    const [skills, setSkills] = useState(props.skills)
    
    
    const TreeOuterContainer = styled(Container)`
        width: 270px;
        background-color: ${props.colorPalette.treeColor};
        border-style: solid;
        border-radius: 15px;
    `

    const TreeInnerContainer = styled(Container)`
        border-style: solid;
        border-radius: 15px;
    `


    const onHoverSkill = (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => {
        props.onHoverSkill(name, description, currentRankEffect, nextRankEffect)
    }

    const onNumberOfPointsInvestedIncreased = (skillId: number, rowId: number) => {

        // FIXME: instead of changing, call props.onNumberOfPointsInvestedIncreased
        // FIXME:   If performance becomes an issue, looking into using React.memo on Skill and/or SkillTreeRow
        //          to prevent re-rendering of every Skill and/or SkillTreeRow on each Skill change

        let updatedSkills: SkillWithImageVO[][] = skills
        let updatedSubList: SkillWithImageVO[] = updatedSkills[rowId]
        // deep copy to prevent weird memory bug that changes all skills
        // TODO:    Having different skills instead of the same skill used many times may allow for only shallow
        //          copying instead of deep copying. Check when designing actual characters and their skills
        let updatedSkill: SkillWithImageVO = {...updatedSubList[skillId]}
        let updatedSkillData: SkillVO = {...updatedSkill.data}
        updatedSkillData.rank++
        updatedSkill.data = updatedSkillData
        updatedSubList[skillId] = updatedSkill
        updatedSkills[rowId] = updatedSubList


        // TODO:    Delete commented out code because more wasteful. Keep for reference for now because this
        //          seems to be the most stable to refer to, but also the slowest and most costly.

        // Have to do deep copy to avoid weird copy logic where every value is changed
        // let updatedSkills: SkillWithImageVO[][] = [...skills]
        // let updatedSubList: SkillWithImageVO[] = [...skills[rowId]]
        // let updatedSkill: SkillWithImageVO = {...updatedSubList[skillId]}
        // let updatedSkillData: SkillVO = {...updatedSkill.data}
        // updatedSkillData.rank = newRank
        // updatedSkill.data = updatedSkillData
        // updatedSubList[skillId] = updatedSkill
        // updatedSkills[rowId] = updatedSubList

        setSkills(updatedSkills)
        setNumberOfPointsInvested(numberOfPointsInvested + 1)
    }

    return (
        <TreeOuterContainer>
            <TreeInnerContainer>
                {skills.map((skillSubList, index) => 
                    <SkillTreeRow
                        key={index}
                        rowId={index}
                        skills={skillSubList}
                        colorPalette={props.colorPalette}
                        minimumRequiredPoints={index * 5}
                        numberOfPointsInvested={numberOfPointsInvested}

                        onHoverSkill={onHoverSkill}
                        onSkillRankIncreased={onNumberOfPointsInvestedIncreased}
                    />
                )} 
            </TreeInnerContainer>
            <TreeNameContainer>
                <strong>{props.name}</strong>
            </TreeNameContainer>
        </TreeOuterContainer>
    )

}