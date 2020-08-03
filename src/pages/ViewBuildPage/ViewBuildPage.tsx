import React from 'react'
import { ViewBuildPageProps } from './ViewBuildPage.types'

export const ViewBuildPage: React.FunctionComponent<ViewBuildPageProps> = props => {
    const name = props.match.params.name

    return (
        <div>
            <h1>
                ViewBuild Page for { name } build
            </h1>
        </div>
    )
}