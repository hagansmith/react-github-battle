import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popular from './components/Popular';
import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';
import { BrowserRouter, Route as _Route, Switch } from "react-router-dom";
var Router = BrowserRouter;
var Route = _Route;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route render={()=> { return <p> Not Found </p>}} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;