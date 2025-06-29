import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="ipl-navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img
            src="/ipllogo.avif"
            alt="IPL Logo"
            className="image_ipl"
          />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          
          
        </ul>
        <ul className="nav-links">
          <li><Link to="/fanpoll"><img src="/fanpolltext.webp" className="fanpoll" /></Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
