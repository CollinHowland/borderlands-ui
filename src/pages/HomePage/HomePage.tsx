import React from 'react'
import { HomePageProps } from './HomePage.types'

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
    return (
        <div className="App">
            {/* Insert nice Header component for whole app here */}
            <h1 className="App-header">
                Builderlands
             </h1>
            {/* Insert nice Body and Menu Side Bar component(s) here */}
            <p>
                Welcome to Builderlands! Here you can create, view, and save builds for your favorite Borderlands characters.
            </p>
        </div>
    )
}