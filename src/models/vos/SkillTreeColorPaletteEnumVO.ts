import { stringify } from "querystring"

enum OverallColorEnum {
    BLUE = 'BLUE',
    ORANGE = 'ORANGE',
    GREEN = 'GREEN',
}

enum TreeColorEnum {
    BLUE = 'blue',
    ORANGE = 'orange',
    GREEN = 'green',
}

enum SkillSelectedEnum {
    BLUE = 'pink',
    ORANGE = 'purple',
    GREEN = 'red',
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