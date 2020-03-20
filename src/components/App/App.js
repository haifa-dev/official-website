import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Home from '../Pages/Home/Home';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import Project from '../Pages/Project/Project';
import TeamCardsGrid from '../TeamCardsGrid/TeamCardsGrid';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects/:id" component={Project} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/members" component={TeamCardsGrid} />
    <Route exact path="*" component={NotFoundPage} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <div className="fixed-top bg-secondary">
      <div className="container">
        <NavBar></NavBar>
      </div>
    </div>
    <Routes />
    <Footer />
  </BrowserRouter>
)

export default App