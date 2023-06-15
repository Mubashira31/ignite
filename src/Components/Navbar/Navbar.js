import React, { useContext } from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
 
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <NavLink className="navbar-brand" to="/">
        IGNITE
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        
           <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/event">
              Events
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link active" to="/suggest">
              Join As Volunteer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/signin">
              Login
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link active" to="/logout">
              Logout
            </NavLink>
          </li>         
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
