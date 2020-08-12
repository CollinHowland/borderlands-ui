import React, { useState, useEffect } from 'react'
import { SkillTreeRowProps } from './SkillTreeRow.types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'
import { Skill } from '../Skill/Skill'


const TreeRow = styled(Row)`
    margin-top: 5px;
    margin-bottom: 5px;
`

const TreeCol = styled(Col)`
    text-align: center;
`

export const SkillTreeRow: React.FunctionComponent<SkillTreeRowProps> = (props) => {

    const [numberOfPointsInvested, setNumberOfPointsInvested] = useState(props.numberOfPointsInvested)

    const isRowDisabled = () => {
        return props.minimumRequiredPoints > numberOfPointsInvested
    }

    const [disabled, setDisabled] = useState(isRowDisabled())

    useEffect(() => {
        setDisabled(isRowDisabled())
        console.log(numberOfPointsInvested)
        console.log(isRowDisabled())
    }, [numberOfPointsInvested])

    const onHoverSkill = (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => {
        props.onHoverSkill(name, description, currentRankEffect, nextRankEffect)
    }

    const onSkillRankIncreased = (skillId: number) => {
        props.onSkillRankIncreased(skillId, props.rowId)
    }
    
    return (
        <TreeRow>
            {props.skills.map((skill, index) => 
                <TreeCol key={index}>
                    <Skill
                        skillId={index}
                        skill={skill}
                        colorPalette={props.colorPalette}
                        disabled={disabled}

                        onHover={onHoverSkill}
                        onSkillRankIncreased={onSkillRankIncreased}
                    />
                </TreeCol>
            )}
        </TreeRow>
    )
}