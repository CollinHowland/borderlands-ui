import React, { useState } from 'react'
import { SkillProps } from './Skill.types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import styled from '@emotion/styled'


export const Skill: React.FunctionComponent<SkillProps> = (props) => {

    const [rank, updateRank] = useState(props.skill.rank)

    const onSkillClicked = () => {
        const newRank = rank + 1
        updateRank(newRank > props.skill.maxRank ? props.skill.maxRank : newRank)
    }

    const skillPopover =
        <Popover id="popover-basic">
            <Popover.Title as="h3">{props.skill.name}</Popover.Title>
            <Popover.Content>
                <div>{props.skill.description}</div>
                {props.skill.currentRankEffect &&
                    <div><strong>Current Effect:</strong><br />{props.skill.currentRankEffect}</div>
                }
                {props.skill.nextRankEffect &&
                    <div><strong>Next Rank Effect:</strong><br />{props.skill.nextRankEffect}</div>
                }
            </Popover.Content>
        </Popover>


    return (

        <>
            <OverlayTrigger
                placement='auto'
                overlay={skillPopover}
                trigger={['hover', 'focus']}
            >
                {({ ...triggerHandler }) => (
                    <Button
                        variant='outline-primary'
                        {...triggerHandler}
                        onClick={onSkillClicked}
                    >
                        <Image
                            rounded
                            src={props.imagePath}
                        />
                        <div>{rank}/{props.skill.maxRank}</div>
                    </Button>
                )}
            </OverlayTrigger>
        </>
    )
}