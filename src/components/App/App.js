import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Home from '../Pages/Home/Home'
import Project from '../Pages/Project/Project'
import TempPageTestCardsGrid from '../TeamCardsGrid/TempPageTestCardsGrid'
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'
import './App.css';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects/:id" component={Project} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/temp_test_card_grid" component={TempPageTestCardsGrid} />
    <Route exact path="*" component={NotFoundPage} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar></NavBar>
      <Routes />
    </div>

  </BrowserRouter>
)

export default App