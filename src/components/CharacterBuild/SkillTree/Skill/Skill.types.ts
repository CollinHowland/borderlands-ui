import { SkillVO } from "../../../../models/vos/SkillVO";
import { SkillTreeColorPaletteEnumVO } from "../../../../models/vos/SkillTreeColorPaletteEnumVO";

export interface ISkillInput {
    imagePath: string,
    skill: SkillVO,
    colorPalette: SkillTreeColorPaletteEnumVO,
    disabled: boolean,
}

export interface ISkillEvents {
    onHover: (name: string, description: string, currentRankEffect?: string, nextRankEffect?: string) => void,
}

export type SkillProps = ISkillInput & ISkillEvents