import { RouteComponentProps } from 'react-router-dom';

export interface MatchParams {
    name: string,
}

export interface IViewBuildPageInput extends RouteComponentProps<MatchParams> {

}

export interface IViewBuildPageEvents {

}

export type ViewBuildPageProps = IViewBuildPageInput & IViewBuildPageEvents