import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/HomePage/HomePage'
import { CreateBuildPage } from './pages/CreateBuildPage/CreateBuildPage'
import { BuildListPage } from './pages/BuildListPage/BuildListPage'
import { ViewBuildPage } from './pages/ViewBuildPage/ViewBuildPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/build-list' component={BuildListPage} />
            <Route path='/create-build' component={CreateBuildPage} />
            {/* view build currently needs a buildId to show anything */}
            <Route path='/view-build/:buildId' component={ViewBuildPage} />
            {/* NotFoundPage must be last for Switch to not always choose it */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
