import { SkillTreeColorPaletteEnumVO } from "../../../models/vos/SkillTreeColorPaletteEnumVO";
import { SkillVO } from "../../../models/vos/SkillVO";
import { SkillWithImageVO } from "../../../models/vos/SkillWithImageVO";

export interface ISkillTreeInput {
    name: string,
    colorPalette: SkillTreeColorPaletteEnumVO,
    numberOfPointsInvested?: number,
    skills: SkillWithImageVO[][],
}

export interface ISkillTreeEvents {
    onHoverSkill: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
}

export type SkillTreeProps = ISkillTreeInput & ISkillTreeEvents