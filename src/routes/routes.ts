import { Route } from 'router5'
import { routeNames } from './RouteName'

const routes: Route[] = [
    {
        name: routeNames.base,
        path: '/'
    },
    { 
        name: routeNames.home,      
        path: '/home'
    },
]

export default routes