import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Home from '../pages/Home/Home';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import RequestForm from "../pages/RequestForm/RequestsForm";
import Projects from "../pages/Projects/Projects";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ProjectRequest" component={RequestForm} />
    <Route exact path="/Projects" component={Projects} />
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