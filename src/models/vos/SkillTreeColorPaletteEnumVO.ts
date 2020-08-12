import { stringify } from "querystring"

enum OverallColorEnum {
    BLUE = 'BLUE',
    ORANGE = 'ORANGE',
    GREEN = 'GREEN',
}

enum TreeColorEnum {
    BLUE = '#005c99',
    ORANGE = '#994d00',
    GREEN = '#558000',
}

enum SkillSelectedEnum {
    BLUE = '#33ccff',
    ORANGE = '#e67300',
    GREEN = '#aaff00',
}

type OverallColorStrings = keyof typeof OverallColorEnum;

export class SkillTreeColorPaletteEnumVO {
    treeColor: string
    // skillDisabled: string
    // skillAvailable: string
    skillSelected: string

    constructor(overallColor: OverallColorStrings) {
        this.treeColor = TreeColorEnum[overallColor]
        this.skillSelected = SkillSelectedEnum[overallColor]
    }
}