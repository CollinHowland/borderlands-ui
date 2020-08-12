import { SkillVO } from "../../../../models/vos/SkillVO";
import { SkillTreeColorPaletteEnumVO } from "../../../../models/vos/SkillTreeColorPaletteEnumVO";
import { SkillWithImageVO } from "../../../../models/vos/SkillWithImageVO";

export interface ISkillInput {
    skillId: number,
    skill: SkillWithImageVO,
    colorPalette: SkillTreeColorPaletteEnumVO,
    disabled: boolean,
}

export interface ISkillEvents {
    onHover: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
    onSkillRankIncreased: (skillId: number) => void,
}

export type SkillProps = ISkillInput & ISkillEvents