import logo from './logo.svg';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import home from './pages/home.js'
import Routines from './pages/routines.js'
import myRoutines from './pages/myroutines.js'
import activities from './pages/activities.js'
import Login from './pages/login-register.js'
import './App.css';

class Navbar extends React.Component{
  render() {
      return (
          <div>
            <h1>Fitness Trac.kr</h1>
            <ul id="nav">
              <li class='login'><a href="login-register">Login/Register</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="routines">Routines</a></li>
              <li><a href="my-routines">My Routines</a></li>
              <li><a href="activities">Activities</a></li>
            </ul>
          </div>
      );
  }
}



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login-register" exact component={Login} />
          <Route path="/" exact component={home} />
          <Route path="/routines" exact component={Routines} />
          <Route path="/my-routines" exact component={myRoutines} />
          <Route path="/activities" exact component={activities} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
