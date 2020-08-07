import { BuildVO } from "../vos/BuildVO"
import { dtoToBuildVOs } from "../converters/dtoToVo"


export const generateSingleBuild = (): BuildVO => {
    return dtoToBuildVOs([mockSingleBuild])[0]
}

export const generatemultipleBuilds = (): BuildVO[] => {
    return dtoToBuildVOs(mockMultipleBuilds)
}

const mockSingleBuild = {
    buildId: 1,
    name: 'Firehose Moze v3',
    description: 'Shoot forever',
}

const mockMultipleBuilds = [
    {
        buildId: 1,
        name: 'Firehose Moze v3',
        description: 'Shoot forever',
    },
    {
        buildId: 7,
        name: 'Jakobs Fl4k v2',
        description: 'Mega critical damage',
    }
]