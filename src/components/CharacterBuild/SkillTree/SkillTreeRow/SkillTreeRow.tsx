import React, { useState } from 'react'
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

    const [disabled, setDisabled] = useState(props.disabled)

    const onHoverSkill = (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => {
        props.onHoverSkill(name, description, currentRankEffect, nextRankEffect)
    }
    
    return (
        <TreeRow>
            {props.skills.map((skill, index) => {
                <TreeCol key={index}>
                    <Skill
                        imagePath={props.imagePaths[index]}
                        skill={skill}
                        colorPalette={props.colorPalette}
                        disabled={disabled}
                        onHover={onHoverSkill}
                    />
                </TreeCol>
            })}
        </TreeRow>
    )
}