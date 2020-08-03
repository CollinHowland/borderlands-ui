import create, { Router } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import loggerPlugin from 'router5-plugin-logger'

import createRouter from "router5";
import routes from './routes'
import { routeNames } from "./RouteName";

export const createMyRouter = () => {
    const router: Router = createRouter(routes, {
        defaultRoute: routeNames.home,
        allowNotFound: false,
        queryParamsMode: 'strict',
    })

    router.usePlugin(loggerPlugin)

    router.usePlugin(browserPlugin())

    return router
}