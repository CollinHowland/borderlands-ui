import React, { useState, useEffect } from 'react'
import { SkillProps } from './Skill.types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'




// .background-red {
//     background-color: red;
//   }

// .background-blue {
//     background-color: blue;
// }

const SkillContainer = styled.div`
    margin: auto;
`

export const Skill: React.FunctionComponent<SkillProps> = (props) => {

    const [rank, setRank] = useState(props.skill.data.rank)
    const [color, setColor] = useState(rank > 0 ? props.colorPalette.skillSelected : 'gray')//useState("#e65c00")
    // const [outlineColor, setOutlineColor] = useState("#ff8000")
    const [disabled, setDisabled] = useState(props.disabled)
    const colorPalette = props.colorPalette

    const SkillButton = styled.button`
        background-color: ${color};
        &:hover {
            background-color: #e6e600;
        }
    `

    useEffect(() => {
        setColor(rank > 0 ? props.colorPalette.skillSelected : 'gray')
        console.log("rank is: " + rank)
    },[rank])

    const onSkillClicked = () => {
        const newRank = rank + 1
        if (newRank <= props.skill.data.maxRank) {
            props.onSkillRankIncreased(props.skillId)
        }
    }

    const onHover = () => {
        props.onHover(props.skill.data.name, props.skill.data.description, props.skill.data.currentRankEffect, props.skill.data.nextRankEffect)
    }

    const skillPopover =
        <Popover id="popover-basic">
            <Popover.Title as="h3">{props.skill.data.name}</Popover.Title>
            <Popover.Content>
                <div>{props.skill.data.description}</div>
                {props.skill.data.currentRankEffect &&
                    <div><strong>Current Effect:</strong><br />{props.skill.data.currentRankEffect}</div>
                }
                {props.skill.data.nextRankEffect &&
                    <div><strong>Next Rank Effect:</strong><br />{props.skill.data.nextRankEffect}</div>
                }
            </Popover.Content>
        </Popover>


    return (
        <SkillContainer>
            {/* <OverlayTrigger
                placement='auto'
                overlay={skillPopover}
                trigger={['hover', 'focus']}
            >
                {({ ...triggerHandler }) => ( */}
                    <SkillButton
                        // {...triggerHandler}
                        onClick={onSkillClicked}
                        //TODO: May have to rework if too many renders because it calls method for mousing over the image and text separately
                        onMouseOver={onHover}
                        disabled={disabled}
                    >
                        <Image
                            rounded
                            src={props.skill.imagePath}
                        />
                        <div>{rank}/{props.skill.data.maxRank}</div>
                    </SkillButton>
                {/* )}
            </OverlayTrigger> */}
        </SkillContainer>
    )
}