import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './Components/Routes/PrivateRoutes';
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
          <PublicRoutes path="/register" component={Register} />
          <PublicRoutes path="/login" component={Login} />
        </Switch>
      </main>
      </Router>
    </div>
    )

export default App
