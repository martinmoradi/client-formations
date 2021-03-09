import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
      </div>
        <div className="nav-item-right">
          <Link to="/logout">Logout</Link>
        </div>
    </nav>
  )

export default Navbar
