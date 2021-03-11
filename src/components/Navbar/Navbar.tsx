import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authMiddleware';

const Navbar = () => {
  const dispatch = useDispatch();

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
        <div className="nav-item">
          <Link to="/register">Register</Link>
        </div>
        <div className="nav-item">
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-item">
          <Link to="/landing-page">LandingPage</Link>
        </div>
        <div className="nav-item">
          <Link to="/admin">Admin</Link>
        </div>
      </div>
      <div className="nav-item-right">
        <Button onClick={e => handleLogout()}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
