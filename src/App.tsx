import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Home/LandingPage';
import AdminBoard from './pages/Admin/AdminBoard/AdminBoard';
import Course from './pages/Course/Course';
import { store } from './redux/store';
import { AdminRoutes, AuthRoutes, NoAuthRoutes } from './routes/Routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <NoAuthRoutes path="/register" component={Register} />
            <NoAuthRoutes path="/login" component={Login} />
            <Route path="/landing-page">
              <LandingPage />
            </Route>
            <AdminRoutes path="/admin" component={AdminBoard} />
            <Route path="/courses" exact>
              <Course />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
