import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      id="header-navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <p>Toy Story</p>
          <p>Game's</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/team">
                TEAM
              </NavLink>
            </li>
            <li className="nav-item border border-1 rounded-pill">
              <NavLink
                className="nav-link px-4"
                activeClassName="active"
                to="/play"
              >
                PLAY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
