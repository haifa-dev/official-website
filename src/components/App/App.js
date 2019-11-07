import React from 'react';
import logo from './../../logo.svg';
import { useParams } from 'react-router';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';

import LandingPage from '../pages/LandingPage/LandingPage';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  </div>
);

const NotFoundPage = () => <h1>NOT FOUND</h1>

const Project = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

const ProjectRequest = () => <h1>Project Requests</h1>

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={() => <h1>About</h1>} />
    <Route exact path="/portfolio/projects/:id" component={Project} />
    <Route exact path="/project-request" component={ProjectRequest} />
    <Route exact path="*" component={NotFoundPage} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App