import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Car Logo</div>
      <div className="nav-links">
      
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link> {/* About link */}
        
      </div>
    </nav>
  );
};

export default Navbar;
