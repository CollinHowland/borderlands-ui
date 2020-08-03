import { IGetBuildsDto } from "../dtos/responses/IGetBuildsDto"
import { BuildVO } from "../vos/BuildVO"


export function dtoToBuildVOs(dto: IGetBuildsDto): BuildVO[] {
    const vos: BuildVO[] = dto.map(b => {
        return {
            buildId: b.buildId,
            name: b.name,
            description: b.description,
        }
    })

    return vos
}