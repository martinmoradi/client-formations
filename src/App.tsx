import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Home/LandingPage';
import AdminBoard from './pages/Admin/AdminBoard/AdminBoard';
import Course from './pages/Course/Course';

const App = () => (
  <Router>
    <div className="App">
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
            <Login />
          </Route>
          <Route path="/landing-page">
            <LandingPage />
          </Route>
          <Route path="/admin">
            <AdminBoard />
          </Route>
          <Route path="/courses" exact>
            <Course />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
