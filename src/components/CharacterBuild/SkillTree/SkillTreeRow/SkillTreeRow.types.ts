import { SkillVO } from "../../../../models/vos/SkillVO";
import { SkillTreeColorPaletteEnumVO } from "../../../../models/vos/SkillTreeColorPaletteEnumVO";
import { SkillWithImageVO } from "../../../../models/vos/SkillWithImageVO";

export interface ISkillTreeRowInput {
    rowId: number,
    skills: SkillWithImageVO[],
    colorPalette: SkillTreeColorPaletteEnumVO,
    minimumRequiredPoints: number,
    numberOfPointsInvested: number,
}

export interface ISkillTreeRowEvents {
    onHoverSkill: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
    onSkillRankIncreased: (skillId: number, rowId: number) => void,
}

export type SkillTreeRowProps = ISkillTreeRowInput & ISkillTreeRowEvents