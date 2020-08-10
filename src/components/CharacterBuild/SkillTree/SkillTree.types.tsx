import { SkillTreeColorPaletteEnumVO } from "../../../models/vos/SkillTreeColorPaletteEnumVO";

export interface ISkillTreeInput {
    colorPalette: SkillTreeColorPaletteEnumVO,
    numberOfPointsInvested: number,
}

export interface ISkillTreeEvents {
    onHoverSkill: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
}

export type SkillTreeProps = ISkillTreeInput & ISkillTreeEvents