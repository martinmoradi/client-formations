import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const App = () => (
    <div>
      <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            Login
          </Route>
        </Switch>
      </main>
      </Router>
    </div>
    )

export default App
