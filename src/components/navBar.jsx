import React from "react";
import { NavLink } from "react-router-dom";
import SelectLanguage from "./selectLanguage";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <i className="fa fa-film" aria-hidden="true" />
        Vidly
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/registerForm">
            Register
          </NavLink>
          <NavLink className="nav-item nav-link" to="/loginForm">
            <i className="fa fa-sign-in" aria-hidden="true" /> Login
          </NavLink>

          <div className="align-right">
            <SelectLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
