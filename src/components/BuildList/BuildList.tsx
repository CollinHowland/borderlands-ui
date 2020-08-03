import React from 'react'
import { BuildListProps } from './BuildList.types'
import { Link } from 'react-router-dom'

export const BuildList: React.FunctionComponent<BuildListProps> = props => {

    return (
        <>
        {props.builds.map((build, key) => 
            <Link key={key} to={`/view-build/${build.buildId}`}>
                <h3>{build.name}</h3>
            </Link>
        )}
    </>
    )
}