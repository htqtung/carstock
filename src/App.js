import React, { Component } from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Carlist from './components/Carlist';
import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <BrowserRouter>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" render={() => <h2>This is front page</h2> }/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/cars" component={Carlist} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
