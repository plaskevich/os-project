import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Browse from './components/Browse';
import Library from './components/Library';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
