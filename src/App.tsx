import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { loadUser } from './redux/auth/authMiddleware'

import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Home/LandingPage';
import AdminBoard from './pages/Admin/AdminBoard/AdminBoard';
import Course from './pages/Course/Course';


const App = () => {
  const dispatch = useDispatch();
  // load user after refresh
  useEffect(() => {
    // @ts-ignore
    dispatch(loadUser());
  }, [dispatch]);

  const client = new QueryClient()
  return (
     <QueryClientProvider client={client}>
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
   </QueryClientProvider>
  )
};

export default App;
