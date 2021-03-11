import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { loadUser } from './redux/auth/authMiddleware';
import { NoAuthRoutes, AdminRoutes } from './routes/Routes';
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

  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
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
    </QueryClientProvider>
  );
};

export default App;
