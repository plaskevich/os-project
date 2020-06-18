import React from 'react';
import logo from '../img/logo.png';
import {
  NavLink,
  Link,
  withRouter
} from "react-router-dom";

function Navbar(props) {
  if (props.location.pathname === '/') {
    return (
      <nav className="navbar navbar-expand-lg home-header">
        <NavLink to="/"><img src={logo} className="home-logo navbar-brand p-0" alt="logo"/></NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/library" className="nav-link sign-btn">SIGN UP</Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg browse-header">
        <NavLink to="/"><img src={logo} className="browse-logo navbar-brand p-0" alt="logo"/></NavLink> 
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <div className="bg-light rounded rounded-pill mr-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-link text-secondary"><i className="fa fa-search"></i></button>
              </div>
              <input type="search" placeholder="SEARCH..."
                     className="form-control border-0 bg-light rounded rounded-pill"/>
            </div>
          </div>
          </li>
          <li className="nav-item">
            <NavLink to="/upload" activeClassName='active' className="nav-link browse-nav-btn">UPLOAD</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/browse" activeClassName='active' className="nav-link browse-nav-btn">BROWSE</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/library" activeClassName='active' className="nav-link browse-nav-btn">LIBRARY</NavLink>
          </li>
          <li className="nav-item mt-0">
            <i className="fas fa-user-circle user-logo"></i>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar);