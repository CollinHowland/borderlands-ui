import { SkillVO } from "../vos/SkillVO";
import { SkillWithImageVO } from "../vos/SkillWithImageVO";
// @ts-ignore
import squareImage from '../../assets/image/skills/storybook/square-outline-32.png'


export const mockSingleSkillRankZero: SkillVO = {
    name: "Super Awesome Skill", 
    rank: 0,
    maxRank: 5,
    description: "This skill makes the vault hunter SUPER AWESOME!!! Deal increased damage while awesome. Here is extra text so I can see what it looks like to have a lot of text",
    nextRankEffect: "Deal +300% radiation damage",
}

export const mockSingleSkillRankOne: SkillVO = {
    name: "Super Awesome Skill", 
    rank: 1,
    maxRank: 5,
    description: "This skill makes the vault hunter SUPER AWESOME!!! Deal increased damage while awesome. Here is extra text so I can see what it looks like to have a lot of text",
    currentRankEffect: "Deal +300% radiation damage",
    nextRankEffect: "Deal +600% radiation damage",
}

export const mockSingleSkillFiveOutOfFive: SkillVO = {
    name: "Super Awesome Skill", 
    rank: 5,
    maxRank: 5,
    description: "This skill makes the vault hunter SUPER AWESOME!!! Deal increased damage while awesome. Here is extra text so I can see what it looks like to have a lot of text",
    currentRankEffect: "Deal +1500% radiation damage",
}

export const mockSingleSkillWithImage: SkillWithImageVO = {
    data: mockSingleSkillRankZero,
    imagePath: squareImage,
}

export const mockSingleSkillRankOneWithImage: SkillWithImageVO = {
    data: mockSingleSkillRankOne,
    imagePath: squareImage,
}

export const mockSingleSkillRankFiveWithImage: SkillWithImageVO = {
    data: mockSingleSkillFiveOutOfFive,
    imagePath: squareImage,
}

export const mockSkillTreeSkills: SkillWithImageVO[][] = [
    [mockSingleSkillWithImage, mockSingleSkillWithImage, mockSingleSkillWithImage],
    [mockSingleSkillWithImage, mockSingleSkillWithImage],
    [mockSingleSkillWithImage, mockSingleSkillWithImage],
    [mockSingleSkillWithImage],
    [mockSingleSkillWithImage, mockSingleSkillWithImage, mockSingleSkillWithImage],
    [mockSingleSkillWithImage],
]


