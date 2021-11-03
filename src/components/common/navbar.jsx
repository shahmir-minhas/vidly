import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Vidly
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies 
            </NavLink>
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link " to="/customer">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/rental">
              Rental
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

//use link of react router instrad of a tag 
//a tag send req to server which sends entirly page files again
//to avoid that link is used and href="" is changed with to=""

//when link having an id as well
/* <Link className="nav-link active" to="/like/${id}">
              Like 
            </Link> */
