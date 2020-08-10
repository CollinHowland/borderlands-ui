import { SkillVO } from "../../../../models/vos/SkillVO";
import { SkillTreeColorPaletteEnumVO } from "../../../../models/vos/SkillTreeColorPaletteEnumVO";

export interface ISkillTreeRowInput {
    imagePaths: string[],
    skills: SkillVO[],
    colorPalette: SkillTreeColorPaletteEnumVO,
    disabled: boolean,
}

export interface ISkillTreeRowEvents {
    onHoverSkill: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
}

export type SkillTreeRowProps = ISkillTreeRowInput & ISkillTreeRowEvents