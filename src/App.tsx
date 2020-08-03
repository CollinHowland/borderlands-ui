import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/HomePage/HomePage'
import { CreateBuildPage } from './pages/CreateBuildPage/CreateBuildPage';
import { BuildListPage } from './pages/BuildListPage/BuildListPage';
import { ViewBuildPage } from './pages/ViewBuildPage/ViewBuildPage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/' component={ HomePage } exact />
        <Route path='/build-list' component={ BuildListPage } />
        <Route path='/create-build' component={ CreateBuildPage } />
        {/* view build currently needs a buildId to show anything */}
        <Route path='/view-build/:buildId' component={ ViewBuildPage } />
      </div>
    </Router>
  )
}

export default App;
