import React from 'react'
import { ViewBuildPageProps } from './ViewBuildPage.types'
import { generateSingleBuild } from '../../services/mocks/mockBuilds'
import { BuildVO } from '../../models/vos/BuildVO'

export const ViewBuildPage: React.FunctionComponent<ViewBuildPageProps> = (props) => {
    // const buildId: string = props.match.params.buildId
    const build: BuildVO = generateSingleBuild()

    return (
        <div>
            <h1>{build.name}</h1>
            <p>{build.description}</p>
        </div>
    )
}