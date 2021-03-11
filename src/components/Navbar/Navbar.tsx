import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { logoutUser } from '../../redux/auth/authMiddleware';
import { UserType } from '../../types/models';

const Navbar = () => {
  const dispatch = useDispatch();

  const currentUser = useTypedSelector(state => state.auth.user);
  console.log('currentUser:', currentUser);

  const checkAdmin = () => currentUser && currentUser.role === 'admin';
  const checkValideted = () => currentUser && currentUser.is_validated;
  const checkAuth = () => !!Cookies.get('jwt_token');

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className="horizontal-navbar">
      <Link to="/" className="logo">
        FormYou
      </Link>
      <div className="navigation">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        {!checkAuth() && (
          <div className="nav-item">
            <Link to="/register">Register</Link>
          </div>
        )}
        <div className="nav-item">
          <Link to="/landing-page">LandingPage</Link>
        </div>
        {checkAdmin() && (
          <div className="nav-item">
            <Link to="/admin">Admin</Link>
          </div>
        )}
      </div>
      {checkAuth() ? (
        <div className="nav-item-right">
          <Button onClick={() => handleLogout()}>Logout</Button>
        </div>
      ) : (
        <div className="nav-item-right">
          <Button onClick={() => handleLogout()}>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
