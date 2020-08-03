import React from 'react'
import { BuildListPageProps } from './BuildListPage.types'
import { generatemultipleBuilds } from '../../services/mocks/mockBuilds'
import { BuildVO } from '../../models/vos/BuildVO'
import { Link } from 'react-router-dom'
import { BuildList } from '../../components/BuildList/BuildList'

export const BuildListPage: React.FunctionComponent<BuildListPageProps> = props => {

    const builds: BuildVO[] = generatemultipleBuilds()

    return (
        <>
            <h1>BuildList Page</h1>
            <BuildList builds={builds} />
        </>
    )
}